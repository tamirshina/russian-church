import React, { useContext } from "react";
import LangContext from '../ChurchContext';
import "../css/App.css";

function JerusalemBox({
    infoToInsert,
    cssForText,
    titleToInseret,
    textStyle,
    id
}) {

    const { lang } = useContext(LangContext);

    function createMarkup(str) {
        return { __html: str };
    }

    function isRightToLeft() {

        if (lang === "hebrew") {
            return true;
        } else return false;
    }

    return (
        <>
            <div className={isRightToLeft() ? "text-jeru-box margin-add-right" : "text-jeru-box timeline-box-style"} style={cssForText} key={id} id={id}>
                <div dangerouslySetInnerHTML={createMarkup(titleToInseret)} className={isRightToLeft() ? 'text-box-heb timeline-title-style' : 'timeline-title-style'} />
                <p dangerouslySetInnerHTML={createMarkup(infoToInsert)} className={isRightToLeft() ? "text-box-heb" : 'margins-timeline-text'} style={textStyle} />
            </div>
        </>
    );
}

export default JerusalemBox;
