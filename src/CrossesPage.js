import React, { useState} from 'react';
import ImageInserter from './ImagesInserter';
import crossesImgEN from './assets/17-crossesEN.png';
import crossesImgHe from './assets/16-crossesHE.png';
import isLeftToRight from './IsLeftToRightFunc';
import TextInserterCrosses from './TextInserterCrosses';
import './App.css';
import HomeBtn from './HomeBtn';

function CrossesPage ({homeBtnLogic}){

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
