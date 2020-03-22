import React from 'react';
import headerUnderline from './assets/10_Headerunderline.png';
import './App.css';


function RightToLeftTitle ({titleToInsert}){

    return (

        <div className='titleBoxHeb'>
            <h1 className='titleFont heInfoPageTitle'>{titleToInsert}</h1>
            <img alt='underline' src={headerUnderline} className='heInfoPageUnderline'/>
        </div>
            );

}
export default RightToLeftTitle;