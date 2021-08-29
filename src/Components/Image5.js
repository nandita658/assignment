import React from 'react';

import './Image5.css';

import Arrow from '../images/Image 15@1X.png';
import Coin from '../images/Image 14@1X.png';

const Image5 = () => {
    return (
        <div className="image5">
            <div className="image5__1">
                <img className="arrow" src={Arrow}/>
                <img className="coin" src={Coin}/>
            </div>
            <div className="image5__2">
                <img className="coin" src={Coin}/>
                <img className="arrow" src={Arrow}/>
            </div>
        </div>
    );
}

export default Image5;