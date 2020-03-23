import React, { useContext} from 'react';
import LangContext from './ChurchContext';
import heTimeline from './assets/09-timeline.png';
import enTimeline from './assets/09-timeline.png';
import ruTimeline from './assets/09-timeline.png';
import HomeBtn from './HomeBtn';
import './App.css';

function TimelinePage ({homeBtnLogic}){

  const lang = useContext(LangContext).lang;

    function pictureToRender (){

      switch(lang){
        case "english":  
            return enTimeline;
        case("hebrew"):
            return heTimeline;
        default:
          return ruTimeline;
    }
  }
 
  return (
        <>
            <img id='timelineBackground' src={pictureToRender()} alt='backgroundImage' className='particularBackGround'></img>
            <HomeBtn homeBtnLogic={homeBtnLogic} />
        </>

        );
    
}

export default TimelinePage;
