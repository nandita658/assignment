import React from 'react';

import FooterHeading from './FooterHeading';

import './Footer.css';
import About from './About';
import ContactUs from './ContactUs';
import Social from './Social';

const Footer = () => {
    return (
        <div className="footerContainer">
            <div className="footer">
                <FooterHeading text="ABOUT">
                    <About text="About Us" />
                    <About text="Privacy Policy" />
                    <About text="Terms of Use" />
                </FooterHeading>
                <FooterHeading text="Contact Us">
                    <ContactUs title="Support:" para="support@bitfex.com" />
                    <ContactUs title="Queries:" para="info@bitfex.com" />
                </FooterHeading>
                <FooterHeading text="SOCIAL">
                    <Social />
                </FooterHeading>
            </div>
            <p className="copyright">Copyright &#169; 2020 Bitfex. All Right Reserved</p>
        </div>
    );
}

export default Footer;