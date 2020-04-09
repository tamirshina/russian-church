import React, { useContext } from 'react';
import backgroundImgEN from '../assets/06-back.png';
import LangContext from '../ChurchContext';
import church1pic from '../assets/01-trinity.png';
import church2pic from '../assets/02-magdalen.png';
import church3pic from '../assets/03-estrenCross.png';
import church4pic from '../assets/04-ascension.png';
import church5pic from '../assets/05-grosny.png';

function FrontPage({ moveToParticularInfo }) {

    const title = ['The Russian Church', 'Русская Церковь', 'המסייה הרוסית'];
    const lang = useContext(LangContext).lang;

    return (

        <div>
            <h1 className='frontHeadline'>
                {lang === "hebrew" ? title[2]
                    : lang === "english" ? title[0]
                        : title[1]}</h1>
            <img src={backgroundImgEN} alt='backgroundImage' className='full-background' />
            <div>
                <img src={church2pic} onClick={moveToParticularInfo} id='russianChurch' alt='church 1 pic' className='churchFront churchOne' />
                <img src={church4pic} onClick={moveToParticularInfo} id='holyFire' alt='church 2 pic' className='churchFront churchTwo' />
                <img src={church5pic} onClick={moveToParticularInfo} id='holydays' alt='church 3 pic' className='churchFront churchThree' />
                <img src={church1pic} onClick={moveToParticularInfo} id='timeLine' alt='church 4 pic' className='churchFront churchFour' />
                <img src={church3pic} onClick={moveToParticularInfo} id='crosses' alt='church 5 pic' className='churchFront churchFive' />
            </div>
        </div>

    );
}

export default FrontPage;