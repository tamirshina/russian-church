import React, {useEffect} from 'react';
import CrossesPage from './CrossesPage';
import {timer, removeTimer} from './TimerHundler';
import RegularInfo from './RegularInfo';
import TimlinePage from './TimelinePage';
import HolydaysPage from './HolydaysPage';
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

  return (
        <>
            {typeOfInfo==='crosses'?<CrossesPage homeBtnLogic={homeBtnLogic} />:null}
            {typeOfInfo==='timeLine'?<TimlinePage homeBtnLogic={homeBtnLogic} />:null}
            {typeOfInfo==='holydays'?<HolydaysPage homeBtnLogic={homeBtnLogic} />:null}
            {typeOfInfo==='russianChurch' || typeOfInfo==='holyFire'?<RegularInfo typeOfInfo={typeOfInfo} homeBtnLogic={homeBtnLogic} />:null}
        </>

        );
    
}

export default ParticularInfoPage;
