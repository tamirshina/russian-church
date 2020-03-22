import React, {useState} from 'react';
import './App.css';
import FrontPage from './FrontPage';
import ParticularInfo from './ParticularInfo';

function App() {

const [isFrontPage, setIsFrontPage] = useState(true);
const [isParticularInfo, setIsParticularInfo] = useState(false);
const [typeOfInfo, setTypeOfInfo]=useState('russianChurch')

const moveToParticularInfo =(e)=> {

  if(e){
    setTypeOfInfo(e.currentTarget.id);
    setIsParticularInfo(true);
    setIsFrontPage(false);
  }  
}
const homeBtn =()=> {
  console.log('bfdhsjfj');
  
  setIsFrontPage(true);
  setIsParticularInfo(false);
}

  return (
    <>
      {isFrontPage?<FrontPage moveToParticularInfo={moveToParticularInfo}/>:null}
      {isParticularInfo?<ParticularInfo typeOfInfo={typeOfInfo} homeBtnLogic={homeBtn}/>:null}
    </>
  );
}

export default App;
