import React, { useEffect, useContext } from 'react';
import LangContext from '../ChurchContext';
import heTimeline from '../assets/09-timeline.png';
import enTimeline from '../assets/09-timeline.png';
import ruTimeline from '../assets/09-timeline.png';
import russianText from "../textInserters/RussianText";
import englishText from "../textInserters/EnglishText";
import hebrewText from "../textInserters/HebrewText";
import HomeBtn from '../fragments/HomeBtn';
import TimelineBox from '../fragments/TimelineBox';
import { timer, removeTimer } from '../TimerHundler';
import '../css/App.css';

function TimelinePage({ homeBtnLogic }) {

  const { lang } = useContext(LangContext);

  useEffect(
    () => {

      timer(homeBtnLogic);

      return () => { // Return callback to run on unmount.

        removeTimer();
      };

    }, [lang, homeBtnLogic]);

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

  function pictureToRender() {

    switch (lang) {
      case "english":
        return enTimeline;
      case ("hebrew"):
        return heTimeline;
      default:
        return ruTimeline;
    }
  }

  return (
    <>
      <img id='timelineBackground' src={pictureToRender()} alt='backgroundImage' className='particularBackGround'></img>
      {whichFileToUse().map((item) => {
        return (
          <TimelineBox
            key={item.id}
            infoToInsert={item.info}
            cssForText={item.css}
            id={item.id}
          />
        );
      })}
      <HomeBtn homeBtnLogic={homeBtnLogic} />

    </>

  );

}

export default TimelinePage;
