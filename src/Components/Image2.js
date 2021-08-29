import React from 'react';

import './Image2.css';

import ThumbsUp from '../images/ThumbsUp.png';
import Bulb from '../images/Bulb.png';
import Wallet from '../images/Wallet.png';

const Image2 = props => {
    const pic={"thumbs": ThumbsUp, "bulb": Bulb, "wallet": Wallet};
    return (
        <img className="image2" src={pic[props.mode]} />
    );
}

export default Image2;