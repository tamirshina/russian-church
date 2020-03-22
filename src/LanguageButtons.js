import React, {useContext} from 'react';
import LangContext from './ChurchContext';
import './App.css';


function LanguageButtons () {

    const { switchLang, lang } = useContext(LangContext);

    function isLeftToRight() {
        
        if(lang==="english" || lang==="russian"){
            return true;
        }
        return false;
        
      }


    return (
        <div id='languagesBtnsDiv' className={isLeftToRight()?'leftToRightLangDiv':'langugeDivCss'}>

        <button onClick={() => {switchLang("hebrew");}} >Hebrew</button>

        <button onClick={() => {switchLang("russian");}} id='russian'>Russian</button>

        <button onClick={() => {switchLang("english");}} id='english'>English</button>

        </div>
    
    );
  }
  
  export default LanguageButtons;