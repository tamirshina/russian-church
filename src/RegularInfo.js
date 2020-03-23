import React from 'react';
import russianChurchEN from './assets/08-russianMaceiaEN.png';
import russianChurchHe from './assets/07-russian MaceiaHE.png';
import holyFireImageEN from './assets/13-holyFireEN.png';
import holyFireImageHe from './assets/12-holyFireHE.png';
import holydaysPageEN from './assets/15-holydaysEN.png';
import holydayPageHe from './assets/14-holydaysHE.png';
import isLeftToRight from './IsLeftToRightFunc';
import TextInserter from './TextInserterParticular';
import './App.css';
import HomeBtn from './HomeBtn';

function RegularInfo ({typeOfInfo, homeBtnLogic}){

    function pictureToRender (){

      switch(typeOfInfo){

        case "russianChurch":
            return isLeftToRight()? russianChurchEN:russianChurchHe;
        case "holyFire":
            return isLeftToRight()? holyFireImageEN:holyFireImageHe;            
        case "holydays":
            return isLeftToRight()?holydaysPageEN:holydayPageHe; 
        default:
          return russianChurchEN;
    }
  }
 
  return (
        <>
            <img src={pictureToRender()} alt='backgroundImage' className='particularBackGround'></img>
            <HomeBtn homeBtnLogic={homeBtnLogic} />
            <TextInserter typeOfInfo={typeOfInfo} isCrosses={false}/>
        </>

        );
    
}

export default RegularInfo;
