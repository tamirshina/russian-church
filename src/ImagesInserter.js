import React from 'react';
import sibirCross from './assets/19-SiberianCross.png';
import byzCross from './assets/20-ByzantineCross.png';
import russianCross from './assets/18-RussianCross.png';
import jeruCross from './assets/22-JerusalemCross.png';
import CRCross from './assets/23-ChiRhoCross.png';
import greekCross from './assets/24-GreekCross.png';
import patCross from './assets/21-PatriarchCross.png';
import './Crosses.css';


function ImagesInserter ({changeType}){
 
  return (
          <div>
            <img id='sibirCross' onClick={changeType} src={sibirCross} alt='someonesImage' className='raspotinImg'></img>
            <img id='byzCross' onClick={changeType} src={byzCross} alt='someonesImage' className='koslevImg'></img>
            <img id='russianCross' onClick={changeType} src={russianCross} alt='someonesImage' className='bailyImg'></img>
            <img id='jeruCross' onClick={changeType} src={jeruCross} alt='someonesImage' className='pandovImg'></img>
            <img id='CRCross' onClick={changeType} src={CRCross} alt='someonesImage' className='shipImg'></img>
            <img id='greekCross' onClick={changeType} src={greekCross} alt='someonesImage' className='rapinImg'></img>
            <img id='patCross' onClick={changeType} src={patCross} alt='someonesImage' className='arsenyImg'></img>
          </div>
        );
    
}

export default ImagesInserter;
