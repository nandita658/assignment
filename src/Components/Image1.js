import React from 'react';

import './Image1.css';

import Bars from '../images/Bars.png';

const Image1 = () => {
    return (
        <div>
            <div className="verticalLine">
                <div className="vl"></div>
                <div className="vl"></div>
                <div className="vl"></div>
                <div className="vl"></div>
            </div>
            <img className="barsImage" src={Bars} />
        </div>
    );
}

export default Image1;