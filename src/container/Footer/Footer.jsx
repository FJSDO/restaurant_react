import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">St. Andrews, Kiln Way Halling, Kent, ME2 1FP, UK</p>
        <p className="p__opensans">+44 075-1587-0000</p>
        <p className="p__opensans">+44 075-1587-9999</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">11:00 Am - 01:00 Am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">12:00 Pm - 02:00 Am</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 Gericht. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;