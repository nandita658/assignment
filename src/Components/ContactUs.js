import React from 'react';

import './ContactUs.css';

const ContactUs = props => {
    return (
        <div className="box__">
            <div className="box__title">{props.title}</div>
            <div className="box__para">{props.para}</div>
        </div>
    );
}

export default ContactUs;