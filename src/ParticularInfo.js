import React, {useEffect, useContext} from 'react';
import LangContext from './ChurchContext';
import ImageInserter from './ImagesInserter';
import russianChurchEN from './assets/08-russianMaceiaEN.png';
import russianChurchHe from './assets/07-russian MaceiaHE.png';
import holyFireImageEN from './assets/13-holyFireEN.png';
import holyFireImageHe from './assets/12-holyFireHE.png';
import holydaysPageEN from './assets/15-holydaysEN.png';
import holydayPageHe from './assets/14-holydaysHE.png';
import crossesPageEN from './assets/17-crossesEN.png';
import crossesPageHe from './assets/16-crossesHE.png';
import heTimeline from './assets/09-timeline.png';
import enTimeline from './assets/09-timeline.png';
import ruTimeline from './assets/09-timeline.png';
import isLeftToRight from './IsLeftToRightFunc';
import {timer, removeTimer} from './TimerHundler';
import TextInserter from './TextInserterParticular';
import LanguagesButtons from './LanguageButtons';
import './App.css';
import HomeBtn from './HomeBtn';

function ParticularInfoPage ({homeBtnLogic, typeOfInfo}){

  const lang = useContext(LangContext).lang;
  
  useEffect(
        () => {
        timer(homeBtnLogic); 
        return () => { // Return callback to run on unmount.
        removeTimer();
          };
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

    function isCrosses(){

      if(typeOfInfo==="crosses"){
         return true;
      }
      return false;
   }
    function pictureToRender (){

      switch(typeOfInfo){

        case "russianChurch":
            return isLeftToRight()? russianChurchEN:russianChurchHe;
        case "holyFire":
            return isLeftToRight()? holyFireImageEN:holyFireImageHe;            
        case "holydays":
            return isLeftToRight()?holydaysPageEN:holydayPageHe; 
        case "crosses":
            return isLeftToRight()?crossesPageEN:crossesPageHe; 
        case "timeLine":
          if(lang === 'english'){
            return enTimeline;
          }if(lang ==='hebrew'){
            return heTimeline;
          }else{
            return ruTimeline;
          }
        default:
          return russianChurchEN;
    }
  }
 
  return (
        <>
            <img src={pictureToRender()} alt='backgroundImage' className='particularBackGround'></img>
            <LanguagesButtons />
            <HomeBtn homeBtnLogic={homeBtnLogic} />
            <TextInserter typeOfInfo={typeOfInfo} homeBtnLogic={homeBtnLogic}/>
            {isCrosses()?<ImageInserter />:null}
        </>

        );
    
}

export default ParticularInfoPage;
