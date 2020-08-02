import React, { useContext } from 'react';
import LangContext from '../ChurchContext';
import timelineBackground from '../assets/timeline-new.png';
import russianText from "../textInserters/RussianText";
import englishText from "../textInserters/EnglishText";
import hebrewText from "../textInserters/HebrewText";
import HomeBtn from '../fragments/HomeBtn';
import TimelineBox from '../fragments/TimelineBox';
import '../css/App.css';

function TimelinePage({ homeBtnLogic }) {

  const { lang } = useContext(LangContext);

  function whichFileToUse() {
    if (lang === "hebrew") {
      return hebrewText.timelinePage.itemsArray;
    }
    if (lang === "english") {
      return englishText.timelinePage.itemsArray;
    } else {
      return russianText.timelinePage.itemsArray;
    }
  }


  return (
    <>
      <img id='timelineBackground' src={timelineBackground} alt='backgroundImage' className='particularBackGround'></img>
      {whichFileToUse().map((item) => {
        return (
          <TimelineBox
            key={item.id}
            infoToInsert={item.info}
            cssForText={item.css}
            titleToInseret={item.title}
            textStyle={item.textStyle}
            id={item.id}
          />
        );
      })}
      <HomeBtn homeBtnLogic={homeBtnLogic} />

    </>

  );

}

export default TimelinePage;
