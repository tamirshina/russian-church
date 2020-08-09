import React, { useState, useEffect } from 'react';
import { timer, removeTimer } from "./TimerHundler";
import './css/App.css';
import FrontPage from './pages/FrontPage';
import ParticularInfo from './pages/ParticularInfo';
import LanguageDiv from './fragments/LanguageButtons';

function App() {

  const [isFrontPage, setIsFrontPage] = useState(true);
  const [isParticularInfo, setIsParticularInfo] = useState(false);
  const [typeOfInfo, setTypeOfInfo] = useState('russianChurch');

  useEffect(() => {
    window.addEventListener("click", resetTimer);
    window.addEventListener('contextmenu', blockContextMenu);

    return () => {
      window.removeEventListener("click", resetTimer);
    };
    // eslint-disable-next-line
  }, []);

  const resetTimer = () => {
    removeTimer();
    timer(homeBtn);
  };

  const blockContextMenu = (evt) => {
    evt.preventDefault();
  };

  const moveToParticularInfo = (e) => {

    if (e) {
      setTypeOfInfo(e.currentTarget.id);
      setIsParticularInfo(true);
      setIsFrontPage(false);
    }
  }
  const homeBtn = () => {
    setIsFrontPage(true);
    setIsParticularInfo(false);
  }

  return (
    <>
      <LanguageDiv />
      {isFrontPage ? <FrontPage moveToParticularInfo={moveToParticularInfo} /> : null}
      {isParticularInfo ? <ParticularInfo typeOfInfo={typeOfInfo} homeBtnLogic={homeBtn} /> : null}
    </>
  );
}

export default App;
