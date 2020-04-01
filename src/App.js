import React, {useState} from 'react';
import './css/App.css';
import FrontPage from './pages/FrontPage';
import ParticularInfo from './pages/ParticularInfo';
import LanguageDiv from './fragments/LanguageButtons';

function App() {

const [isFrontPage, setIsFrontPage] = useState(true);
const [isParticularInfo, setIsParticularInfo] = useState(false);
const [typeOfInfo, setTypeOfInfo]=useState('russianChurch');

const moveToParticularInfo =(e)=> {

  if(e){
    setTypeOfInfo(e.currentTarget.id);
    setIsParticularInfo(true);
    setIsFrontPage(false);
  }  
}
const homeBtn =()=> {  
  setIsFrontPage(true);
  setIsParticularInfo(false);
}

  return (
    <>
      <LanguageDiv />
      {isFrontPage?<FrontPage moveToParticularInfo={moveToParticularInfo}/>:null}
      {isParticularInfo?<ParticularInfo typeOfInfo={typeOfInfo} homeBtnLogic={homeBtn}/>:null}
    </>
  );
}

export default App;
