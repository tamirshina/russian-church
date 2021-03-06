import React, { useContext, useRef } from 'react';
import isLeftToRight from '../fragments/IsLeftToRightFunc';
import LangContext from '../ChurchContext';
import russianText from './RussianText';
import englishText from './EnglishText';
import hebrewText from './HebrewText';
import { timer, removeTimer } from '../TimerHundler';
import RighToLeftTitle from '../fragments/RightToLeftTitle';
import LeftToRightTitle from '../fragments/LeftToRightTitle';
import ScrollBtns from "../fragments/ScrollBtns";
import '../css/App.css';

function TextInserterParticular({ typeOfInfo, homeBtnLogic }) {

    const lang = useContext(LangContext).lang;
    const textParaEl = useRef(null);

    function createMarkup(str) { return { __html: str } };

    function resetTimer() {
        removeTimer();
        timer(homeBtnLogic);
    }

    function whichFileToUse() {
        if (lang === "hebrew") {
            return hebrewText;
        }
        if (lang === "english") {
            return englishText;
        }
        else {
            return russianText;
        }
    }

    function infoToInsert() {


        return whichFileToUse().particularInfo[typeOfInfo];
    }

    function titleToInsert() {

        return whichFileToUse().titles[typeOfInfo].text;
    }
    function cssToInsert() {

        return whichFileToUse().titles[typeOfInfo].extraCss;
    }
    const scrollAndUpdateDown = () => {

        resetTimer();
        textParaEl.current.scrollTop += 10;
    }

    const scrollAndUpdateUp = () => {

        textParaEl.current.scrollTop -= 10;
    }

    return (

        <div>
            {isLeftToRight() ?
                <LeftToRightTitle titleToInsert={titleToInsert()} cssToInsert={cssToInsert()} /> :
                <RighToLeftTitle titleToInsert={titleToInsert()} />}
            <p ref={textParaEl} className={isLeftToRight() ? 'infoEnText' : 'textCss'} id="particularTextBox" dangerouslySetInnerHTML={createMarkup(infoToInsert())}>
            </p>
            <ScrollBtns homeBtnLogic={homeBtnLogic} scrollDown={scrollAndUpdateDown} scrollUp={scrollAndUpdateUp} />
        </div>
    );
}

export default TextInserterParticular;
