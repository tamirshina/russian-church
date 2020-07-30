import React, { useState } from 'react';
import sibirCross from '../assets/42-halo-cross.png';
import byzCross from '../assets/20-ByzantineCross.png';
import russianCross from '../assets/18-RussianCross.png';
import jeruCross from '../assets/22-JerusalemCross.png';
import CRCross from '../assets/23-ChiRhoCross.png';
import greekCross from '../assets/24-GreekCross.png';
import patCross from '../assets/21-PatriarchCross.png';
import '../css/Crosses.css';


function ImagesInserter({ setTypeShowInfo }) {

  const [activeImg, setActiveImg] = useState('russianCross');

  function setActive(e) {
    setTypeShowInfo(e)
    setActiveImg(e.currentTarget.id);
  }

  return (
    <div>
      <img id='sibirCross' onClick={setActive} src={sibirCross} alt='someonesImage' className={activeImg === 'sibirCross' ? 'activeCross' : null}></img>
      <img id='byzCross' onClick={setActive} src={byzCross} alt='someonesImage' className={activeImg === 'byzCross' ? 'activeCross' : null}></img>
      <img id='russianCross' onClick={setActive} src={russianCross} alt='someonesImage' className={activeImg === 'russianCross' ? 'activeCross' : null}></img>
      <img id='jeruCross' onClick={setActive} src={jeruCross} alt='someonesImage' className={activeImg === 'jeruCross' ? 'activeCross' : null}></img>
      <img id='CRCross' onClick={setActive} src={CRCross} alt='someonesImage' className={activeImg === 'CRCross' ? 'activeCross' : null}></img>
      <img id='greekCross' onClick={setActive} src={greekCross} alt='someonesImage' className={activeImg === 'greekCross' ? 'activeCross' : null}></img>
      <img id='patCross' onClick={setActive} src={patCross} alt='someonesImage' className={activeImg === 'patCross' ? 'activeCross' : null}></img>
    </div>
  );

}

export default ImagesInserter;
