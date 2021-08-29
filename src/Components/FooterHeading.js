import React from 'react';

import './FooterHeading.css';

const FooterHeading = props => {
    return (
        <div>
            <div className="heading">{props.text}</div>
            <div>{props.children}</div>
        </div>
    );
}

export default FooterHeading;