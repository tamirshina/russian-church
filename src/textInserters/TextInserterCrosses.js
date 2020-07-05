import React, { useContext, useRef } from 'react';
import LangContext from '../ChurchContext';
import russianText from './RussianText';
import englishText from './EnglishText';
import hebrewText from './HebrewText';
import CrossesTitle from '../fragments/CrossesTitle';
import '../css/App.css';
import '../css/Crosses.css';

function TextInserterCrosses({ typeOfInfo }) {

    const lang = useContext(LangContext).lang;
    const textParaEl = useRef(null);

    function isLeftToRight() {
        if (lang === "hebrew") {
            return false;
        } else {
            return true;
        }
    }

    function createMarkup(str) { return { __html: str } };

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

        return whichFileToUse().crosses[typeOfInfo];
    }
    function titleToInsert() {

        return whichFileToUse().crossesTitles[typeOfInfo];
    }


    return (

        <div className={isLeftToRight() ? 'crosses-text-box-en' : 'crosses-text-box-heb'}>
            <CrossesTitle titleToInsert={titleToInsert()} />
            <p ref={textParaEl} className={isLeftToRight() ? 'crossesParaEN' : 'crossesParaHE'} id="particularTextBox" dangerouslySetInnerHTML={createMarkup(infoToInsert())}>
            </p>
        </div>
    );
}

export default TextInserterCrosses;
