import React, {useEffect} from 'react';
import CrossesPage from './CrossesPage';
import {timer, removeTimer} from './TimerHundler';
import RegularInfo from './RegularInfo';
import './App.css';

function ParticularInfoPage ({typeOfInfo, homeBtnLogic}){
  
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
 
  return (
        <>
            {isCrosses()?<CrossesPage homeBtnLogic={homeBtnLogic} />:<RegularInfo typeOfInfo={typeOfInfo} homeBtnLogic={homeBtnLogic}/>}
        </>

        );
    
}

export default ParticularInfoPage;
