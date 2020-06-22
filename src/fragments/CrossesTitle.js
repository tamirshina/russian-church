import React, { useContext } from 'react';
import headerUnderline from '../assets/10_Headerunderline.png';
import headerUnderlineEn from '../assets/10-HeaderunderlineEn.png';
import LangContext from "../ChurchContext";
import '../css/App.css';
import '../css/Crosses.css';


function CrossesTitle({ titleToInsert }) {

    const lang = useContext(LangContext).lang;

    function isLeftToRight() {
        if (lang === "hebrew") {
            return false;
        } else {
            return true;
        }
    }

    return (

        <div>
            <h1 style={{ marginBottom: "0" }} className={isLeftToRight() ? 'titleFont' : 'titleFont'}>{titleToInsert}</h1>
            <img alt='underline' src={isLeftToRight() ? headerUnderlineEn : headerUnderline} className={isLeftToRight() ? 'crosses-underline' : 'crossesHeUnderline'} />
        </div>
    );

}
export default CrossesTitle;