import React from 'react';

import './Image4.css';

import RisingArrow from '../images/Image 16@1X.png';

const Image4 = () => {
    return (
        <div className="risingArrow">
            <img className="risingArrow1" src={RisingArrow}/>
            <img className="risingArrow2" src={RisingArrow}/>
        </div>
    );
}

export default Image4;