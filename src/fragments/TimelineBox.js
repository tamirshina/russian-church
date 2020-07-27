import React, { useContext } from "react";
import LangContext from '../ChurchContext';
import "../css/App.css";

function JerusalemBox({
    infoToInsert,
    cssForText,
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
            <div className={isRightToLeft() ? "text-jeru-box margin-add-right" : "text-jeru-box margin-add-left"} style={cssForText} key={id} id={id}>
                <p dangerouslySetInnerHTML={createMarkup(infoToInsert)} className={isRightToLeft() ? "text-box-heb" : null} />
            </div>
        </>
    );
}

export default JerusalemBox;
