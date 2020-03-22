import React, { useState } from 'react';
import sibirCross from './assets/19-SiberianCross.png';
import byzCross from './assets/20-ByzantineCross.png';
import russianCross from './assets/18-RussianCross.png';
import jeruCross from './assets/22-JerusalemCross.png';
import CRCross from './assets/23-ChiRhoCross.png';
import greekCross from './assets/24-GreekCross.png';
import patCross from './assets/21-PatriarchCross.png';
import './Crosses.css';


function ImagesInserter ({setTypeShowInfo}){

  const [activeImg, setActiveImg] = useState();

  function setActive(e){
    setActiveImg(e.currentTarget.id);
  }



 
  return (
          <div>
            <img id='sibirCross' onClick={setTypeShowInfo} src={sibirCross} alt='someonesImage' className={activeImg==='sibirCross'?'activeCross':null}></img>
            <img id='byzCross' onClick={setTypeShowInfo} src={byzCross} alt='someonesImage' className={activeImg==='byzCross'?'activeCross':null}></img>
            <img id='russianCross' onClick={setTypeShowInfo} src={russianCross} alt='someonesImage' className={activeImg==='russianCross'?'activeCross':null}></img>
            <img id='jeruCross' onClick={setTypeShowInfo} src={jeruCross} alt='someonesImage' className={activeImg==='jeruCross'?'activeCross':null}></img>
            <img id='CRCross' onClick={setTypeShowInfo} src={CRCross} alt='someonesImage' className={activeImg==='CRCross'?'activeCross':null}></img>
            <img id='greekCross' onClick={setTypeShowInfo} src={greekCross} alt='someonesImage' className={activeImg==='greekCross'?'activeCross':null}></img>
            <img id='patCross' onClick={setTypeShowInfo} src={patCross} alt='someonesImage' className={activeImg==='patCross'?'activeCross':null}></img>
          </div>
        );
    
}

export default ImagesInserter;
