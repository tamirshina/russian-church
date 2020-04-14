import React, { useContext, useRef } from 'react';
import isLeftToRight from '../fragments/IsLeftToRightFunc';
import LangContext from '../ChurchContext';
import russianText from './russianText';
import englishText from './englishText';
import hebrewText from './HebrewText';
import CrossesTitle from '../fragments/CrossesTitle';
import '../css/App.css';
import '../css/Crosses.css';

function TextInserterCrosses({ typeOfInfo }) {

    const lang = useContext(LangContext).lang;
    const textParaEl = useRef(null);

    function createMarkup(str) { return { __html: str } };

    function whichFileToUse() {
        if (lang === "hebrew") {
            return hebrewText;
        }
        if (lang === "english") {
            return JSON.parse(JSON.stringify(englishText));
        }
        else {
            return JSON.parse(JSON.stringify(russianText));
        }
    }

    function infoToInsert() {

        return whichFileToUse().crosses[typeOfInfo];
    }
    function titleToInsert() {

        return whichFileToUse().crossesTitles[typeOfInfo];
    }


    return (

        <div className='textBoxCss'>
            <CrossesTitle titleToInsert={titleToInsert()} />
            <p ref={textParaEl} className={isLeftToRight() ? 'crossesParaEN' : 'crossesParaHE'} id="particularTextBox" dangerouslySetInnerHTML={createMarkup(infoToInsert())}>
            </p>
        </div>
    );
}

export default TextInserterCrosses;
