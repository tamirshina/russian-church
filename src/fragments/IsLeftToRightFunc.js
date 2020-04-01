
import {useContext} from 'react';
import LangContext from '../ChurchContext';


function IsLeftToRight () {

    const { lang } = useContext(LangContext);

    if(lang==="english" || lang==="russian"){
        return true;
    }
    return false;
    
  }

  export default IsLeftToRight;
