import React from 'react';

import './WhyBitfix.css';

const NewlineText = (props) => {
    const text = props.text;
    const newText = text.split('\n').map(str => <p>{str}</p>);
    return newText;
}

const WhyBitfix = (props) => {
    return (
        <div className="box">
            <h1>{props.title}</h1>
            <div className="p">
                <NewlineText text={props.para} />
            </div>
        </div>
    );
}

export default WhyBitfix;