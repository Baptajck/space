import React from 'react';
import './footer.scss';
import {
  FaGithub, FaLinkedin, FaSuitcase, FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  const date = new Date();
  return (
    <div className="footer reveal">
      <div className="footer-container--div reveal-1">
        <div className="footer-container footer-container-border reveal-2">
          <h2 className="footer-container-title reveal-3">Baptjack</h2>
          <p className="footer-container-desc reveal-4">Baptiste Parville, young front-end developer. Find me on my social medias and view more of my works in my professional website.</p>
          <ul className="footer-container-groupLink reveal-5">
            <li className="footer-container-groupLink-item">
              <a href="https://github.com/Baptajck" className="footer-container-groupLink-item--a"><FaGithub /><span>Github</span></a>
            </li>
            <li className="footer-container-groupLink-item">
              <a href="https://www.linkedin.com/in/baptiste-parville/" className="footer-container-groupLink-item--a"><FaLinkedin /><span>Linkedin</span></a>
            </li>
            <li className="footer-container-groupLink-item">
              <a href="https://twitter.com/baptjacky" className="footer-container-groupLink-item--a"><FaTwitter /><span>Twitter</span></a>
            </li>
            <li className="footer-container-groupLink-item">
              <a href="http://baptjack.fr" className="footer-container-groupLink-item--a"><FaSuitcase /><span>Portfolio</span></a>
            </li>
          </ul>
        </div>
        <div className="footer-container reveal-2">
          <h2 className="footer-container-title reveal-3">About</h2>
          <div className="footer-container-group">
            <p className="footer-container-desc reveal-4">To keep pace with aerospace technological advances, I have built this project to collect the latest information from the Space X company. Hosted by GitHub, this work uses the open-access <a href="https://docs.spacexdata.com/?version=latest#6b74116b-c47f-4181-b7e8-4adecfa9e165" className="footer-container-about-link">SpaceX API</a>.<br />I hope you enjoyed the visit.</p>
            <p className="footer-container-desc--copy reveal-4">&copy; {date.getFullYear()} - Baptjack</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
