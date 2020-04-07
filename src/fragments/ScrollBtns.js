import React from "react";
import scrollUpImg from "../assets/11-up-arrow.png";
import scrollDwonImg from "../assets/02-down-arrow.png";
import isLeftToRight from './IsLeftToRightFunc';
import "../css/App.css";

function ScrollingBtn({ scrollDown, scrollUp }) {



    return (
        <div className={isLeftToRight() ? "scroll-button-container" : "scroll-container-heb"} >
            <img
                src={scrollUpImg}
                alt="scroll-up"
                onClick={scrollUp}
                className={"left-scroll"}
            />
            <img src={scrollDwonImg} alt="scroll-up" onClick={scrollDown} />
        </ div>
    );
}

export default ScrollingBtn;
