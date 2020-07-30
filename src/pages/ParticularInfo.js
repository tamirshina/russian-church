import React from 'react';
import CrossesPage from './CrossesPage';
import RegularInfo from './RegularInfo';
import TimlinePage from './TimelinePage';
import HolydaysPage from './HolydaysPage';
import '../css/App.css';

function ParticularInfoPage({ typeOfInfo, homeBtnLogic }) {

  return (
    <>
      {typeOfInfo === 'crosses' ? <CrossesPage homeBtnLogic={homeBtnLogic} /> : null}
      {typeOfInfo === 'timeLine' ? <TimlinePage homeBtnLogic={homeBtnLogic} /> : null}
      {typeOfInfo === 'holydays' ? <HolydaysPage homeBtnLogic={homeBtnLogic} /> : null}
      {typeOfInfo === 'russianChurch' || typeOfInfo === 'holyFire' ? <RegularInfo typeOfInfo={typeOfInfo} homeBtnLogic={homeBtnLogic} /> : null}
    </>

  );

}

export default ParticularInfoPage;
