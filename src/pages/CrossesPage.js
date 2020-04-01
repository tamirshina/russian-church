import React, {useEffect, useState} from 'react';
import ImageInserter from '../textInserters/ImagesInserter';
import crossesImgEN from '../assets/17-crossesEN.png';
import crossesImgHe from '../assets/16-crossesHE.png';
import isLeftToRight from '../fragments/IsLeftToRightFunc';
import TextInserterCrosses from '../textInserters/TextInserterCrosses';
import {timer, removeTimer} from '../TimerHundler';
import '../css/App.css';
import HomeBtn from '../fragments/HomeBtn';

function CrossesPage ({homeBtnLogic}){

useEffect(
      () => {
      timer(homeBtnLogic);

      return () => { // Return callback to run on unmount.
            
      removeTimer();
            };
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    

  const [typeOfInfo, setTypeOfInfo]=useState('russianCross');

  const setTypeShowInfo = (e) => {
        setTypeOfInfo(e.currentTarget.id)
  }  
 
  return (
        <>
            <img src={isLeftToRight()?crossesImgEN:crossesImgHe} alt='backgroundImage' className='particularBackGround'></img>
            <HomeBtn homeBtnLogic={homeBtnLogic} />
            <TextInserterCrosses typeOfInfo={typeOfInfo} />
            <ImageInserter setTypeShowInfo={setTypeShowInfo} typeOfInfo={typeOfInfo}/>
        </>

        );
    
}

export default CrossesPage;
