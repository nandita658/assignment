import React from 'react';

import dot from '../images/6.png';

import './Steps.css';

const Steps = (props) => {
    return (
        <div className="contain">
            <div className="contain1">
                <h1 className="number">{props.number}<img className="dotImage" src={dot}/></h1>
            </div>
            <div className="contain2">
                <h3>{props.title}</h3>
                <p className="para">{props.line}</p>
            </div>
        </div>
    );
}

export default Steps;