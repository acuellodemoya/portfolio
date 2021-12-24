import React from 'react';
import '../styles/Footer.css';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="footer">
      <a href="https://www.github.com/acuellodemoya">
        <BsGithub className="social-logo" />
      </a>
      <a href="https://www.twitter.com/CuelloMoya">
        <AiOutlineTwitter className="social-logo" />
      </a>
      <a href="https://www.linkedin.com/in/alejandro-cuello-de-moya-02404619a/">
        <BsLinkedin className="social-logo" />
      </a>
    </footer>
  );
};

export default Footer;
