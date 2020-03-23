import React, { useState, useRef} from 'react';
import continueImg from './assets/26-continue.png';
import sundayPlamEN from './assets/27-PalmSundayEN.png';
import sundayPlamHE from './assets/28-PalmSundayHE.png';
import adventFeastEN from './assets/29-AdventFeastEN.png';
import adventFeastHE from './assets/30-AdventFeastHE.png';
import midsummerEN from './assets/31-MidsummerEN.png';
import midsummerHE from './assets/37-MidsummerHE.png';
import selenicaEN from './assets/38-SelenicaEN.png';
import selenicaHE from './assets/39-SelenicaHE.png';
import tranformationEN from './assets/40-TransfigurationEN.png';
import tranformationHE from './assets/41-TransfigurationHE.png';
import isLeftToRight from './IsLeftToRightFunc';
import TextInserterHolydays from './TextInserterHolydays';
import './App.css';
import HomeBtn from './HomeBtn';

function HolydaysPage ({homeBtnLogic}){

  const [typeOfInfo, setTypeOfInfo]=useState(0);
  const moveFoword = useRef(null);

  const setTypeShowInfo = () => {
        setTypeOfInfo(typeOfInfo+1);
  }  
  const imageToInsert =()=>{

      switch (typeOfInfo) {
        case 0:
            return isLeftToRight()?sundayPlamEN:sundayPlamHE;
        case 1:
            return isLeftToRight()?adventFeastEN:adventFeastHE;
        case 2:
            return isLeftToRight()?midsummerEN:midsummerHE;
        case 3:
            return isLeftToRight()?selenicaEN:selenicaHE;
        case 4:
            return isLeftToRight()?tranformationEN:tranformationHE;
          default:
              return sundayPlamEN;
      }
  }
 
  return (
        <>
            <img src={imageToInsert()} alt='backgroundImage' className='particularBackGround'></img>
            <HomeBtn homeBtnLogic={homeBtnLogic} />
            <TextInserterHolydays typeOfInfo={typeOfInfo} />
            <img ref={moveFoword} src={continueImg} onClick={setTypeShowInfo} alt='continue' className='holydaysContinue'/>
        </>

        );
    
}

export default HolydaysPage;
