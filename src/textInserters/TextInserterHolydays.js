import React, { useContext, useRef } from 'react';
import isLeftToRight from '../fragments/IsLeftToRightFunc';
import LangContext from '../ChurchContext';
import russianText from './russianText';
import englishText from './englishText';
import hebrewText from './HebrewText';
import HolydayTitle from '../fragments/HolyTitle';
import '../css/App.css';

function TextInserterHolydays({ typeOfInfo }) {

    const lang = useContext(LangContext).lang;
    const holyday = setHolyday();
    const textParaEl = useRef(null);

    function createMarkup(str) { return { __html: str } };

    function setHolyday() {

        switch (typeOfInfo) {
            case 0:
                return 'palmSunday';
            case 1:
                return 'adventFeast';
            case 2:
                return 'midsummer';
            case 3:
                return 'selenica';
            case 4:
                return 'transformation'
            default:
                return 'palmSunday';
        }
    }
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

        return whichFileToUse().holydays[holyday];
    }
    function titleToInsert() {

        return whichFileToUse().holydaysTitles[holyday];
    }

    return (
        <div className='textBoxCss'>
            <HolydayTitle titleToInsert={titleToInsert()} />
            <p ref={textParaEl} className={isLeftToRight() ? 'crossesParaEN' : 'crossesParaHE'} id="particularTextBox" dangerouslySetInnerHTML={createMarkup(infoToInsert())}>
            </p>
        </div>
    );
}

export default TextInserterHolydays;
