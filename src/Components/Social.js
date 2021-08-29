import React from 'react';

import telegram from '../images/Telegram.png';
import twitter from '../images/Twitter.png';
import linkedin from '../images/LinkedIn.png';
import facebook from '../images/Facebook.png';
import instagram from '../images/Instagram.png';
import youtube from '../images/Youtube.png';

import './Social.css';

const Social = () => {
    return (
        <div className="social__">
            <div className="social__1">
                <img src={telegram} />
                <img src={twitter} />
                <img src={linkedin} />
            </div>
            <div className="social__1">
                <img src={facebook} />
                <img src={instagram} />
                <img src={youtube} />
            </div>
        </div>
    );
}

export default Social;