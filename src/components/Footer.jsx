import React from "react";
import { Link } from "react-router-dom";
import {
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialGithub,
} from "react-icons/ti";

//*-----Codes-----
const Footer = () => {
  return (
    <div className="footer">
      <div className="iconBox">
        <a
          href="https://github.com/eemresoysal"
          target="_blank"
          className="icon"
        >
          <TiSocialGithub />
        </a>
        <a href="#" className="icon">
          <TiSocialInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/eemresoysal/"
          target="_blank"
          className="icon"
        >
          <TiSocialLinkedin />
        </a>
      </div>
      <div>
        <h4>EMRE SOYSAL</h4>
      </div>
    </div>
  );
};

export default Footer;
