import React from 'react';

import firstComplete from '../images/1.png';
import cryptoDerivative from '../images/2.png';
import perpectual from '../images/3.png';
import block from '../images/4.png';
import option from '../images/5.png';

import './CryptoDerivatives.css';

const CryptoDerivatives = () => {
    return (
        <div className="container">
            <div className="container1">
                <img className="img1" src={firstComplete} />
                <img className="img2" src={cryptoDerivative} />
                <img className="img3" src={perpectual} />
            </div>
            <div className="container2">
                <button>VIEW TRADE</button>
            </div>
        </div>
    );
}

export default CryptoDerivatives
