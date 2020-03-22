import React, { useContext} from 'react';
import LangContext from './ChurchContext';
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
import TextInserter from './TextInserterParticular';
import LanguagesButtons from './LanguageButtons';
import './App.css';
import HomeBtn from './HomeBtn';

function RegularInfo ({typeOfInfo, homeBtnLogic}){

  const lang = useContext(LangContext).lang;

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
            <TextInserter typeOfInfo={typeOfInfo} isCrosses={false}/>
        </>

        );
    
}

export default RegularInfo;
