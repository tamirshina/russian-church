import React from 'react';
import headerUnderline from './assets/10_Headerunderline.png';
import isLeftToRight from './IsLeftToRightFunc';
import './App.css';
import './Crosses.css';


function CrossesTitle ({titleToInsert}){

    return (

    <div className={isLeftToRight()?'crossesTitleEN':'crossesTitleHE'}>
        <h1 className={isLeftToRight()?'titleFont frontPageEnTitle':'titleFont crossesPageHeTitle'}>{titleToInsert}</h1>
        <img alt='underline' src={headerUnderline} className={isLeftToRight()?'frontPageUnderline':'crossesHeUnderline'}/>
    </div>
   );

}
export default CrossesTitle;