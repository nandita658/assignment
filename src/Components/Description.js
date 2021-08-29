import React from 'react';

import './Description.css';

const NewlineText = (props) => {
    const text = props.text;
    const newText = text.split('\n').map(str => <p>{str}</p>);
    return newText;
}

const Description = props => {
    return (
        <div>
            <div className="description__title">{props.title}</div>
            <NewlineText text = {props.para}/>
            <div>{props.children}</div>
        </div>
    );
}

export default Description;