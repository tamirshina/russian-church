import React, { useContext, useRef, useEffect, useState } from 'react';
import scrollBtn from '../assets/02_Continue-text-button-small.png';
import isLeftToRight from '../fragments/IsLeftToRightFunc';
import LangContext from '../ChurchContext';
import russianText from './russianText';
import englishText from './englishText';
import hebrewText from './hebrewText';
import { timer, removeTimer } from '../TimerHundler';
import upperTextArrow from '../assets/11_textArrowUP.png';
import RighToLeftTitle from '../fragments/RightToLeftTitle';
import LeftToRightTitle from '../fragments/LeftToRightTitle';
import '../css/App.css';

function TextInserterParticular({ typeOfInfo, homeBtnLogic, isCrosses }) {

    const lang = useContext(LangContext).lang;
    const [isScroll, setIsScroll] = useState(false);
    const textParaEl = useRef(null);
    const upperScrollEl = useRef(null);
    const bottomScrollEl = useRef(null);

    useEffect(() => {

        if (textParaEl.current) {
            if (textParaEl.current.scrollHeight > textParaEl.current.offsetHeight) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        }
    }, [textParaEl])

    function resetTimer() {
        removeTimer();
        timer(homeBtnLogic);
    }

    function whichFileToUse() {
        if (lang === "hebrew") {
            return JSON.parse(JSON.stringify(hebrewText));
        }
        if (lang === "english") {
            return JSON.parse(JSON.stringify(englishText));
        }
        else {
            return JSON.parse(JSON.stringify(russianText));
        }
    }

    function infoToInsert() {


        return whichFileToUse().particularInfo[typeOfInfo];
    }

    function isScrollBtn() {
        if (textParaEl.current) {
            if (textParaEl.current.scrollHeight > textParaEl.current.offsetHeight) {
                return true;
            } else {
                return false;
            }
        }
    }
    function titleToInsert() {

        return isCrosses ? whichFileToUse().crossesTitles[typeOfInfo] : whichFileToUse().titles[typeOfInfo];
    }
    const scrollAndUpdateDown = () => {

        resetTimer();

        let maxTextLength = textParaEl.current.scrollHeight - textParaEl.current.clientHeight;
        textParaEl.current.scrollTop += 10;

        if (textParaEl.current.scrollTop !== 0) {
            upperScrollEl.current.style.visibility = 'visible';
        }
        if (textParaEl.current.scrollTop === maxTextLength) {
            bottomScrollEl.current.style.visibility = 'hidden';
        }
    }

    const scrollAndUpdateUp = () => {

        textParaEl.current.scrollTop -= 10;

        if (textParaEl.current.scrollTop === 0) {
            upperScrollEl.current.style.visibility = 'hidden';
        } if (bottomScrollEl.current.style.visibility === 'hidden') {
            bottomScrollEl.current.style.visibility = 'visible';
        }
    }

    return (

        <div className={isLeftToRight() ? null : 'textBoxCss'}>
            {isLeftToRight() ?
                <LeftToRightTitle titleToInsert={titleToInsert()} /> :
                <RighToLeftTitle titleToInsert={titleToInsert()} />}
            {isScroll ? <img ref={upperScrollEl} onClick={() => { resetTimer(); scrollAndUpdateUp() }} src={upperTextArrow} alt="scrollBtn" className={isLeftToRight() ? 'topInfoScrollEn' : 'topScrollOneHE'} /> : null}
            <p ref={textParaEl} className={isLeftToRight() ? 'infoEnText' : 'textCss'} id="particularTextBox">
                {infoToInsert()}
            </p>
            {isScroll ? <img ref={bottomScrollEl} onClick={() => { resetTimer(); scrollAndUpdateDown() }} src={scrollBtn} alt="scrollBtn" className={isLeftToRight() ? 'buttomInfoScroll' : 'buttomScrollOneHE'} /> : null}
        </div>
    );
}

export default TextInserterParticular;
