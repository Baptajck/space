/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import './roadster.scss';

const Header = ({ fetchRoadster, roadster }) => {
  useEffect(() => {
    fetchRoadster();
  }, []);

  return (
    <div className="roadster reveal">
      <h1 className="roadster-title">funny bonus</h1>
      <p className="roadster-name reveal-1">{roadster.name}</p>
      <img src={roadster.flickr_images} alt="Car in space" className="roadster-img reveal-2" />
      <p className="roadster-desc reveal-4">{roadster.details}</p>
      <div className="roadster-container-link reveal-5">
        <a href={roadster.wikipedia} rel="noreferrer" target="_blank" className="roadster-link">wikipedia <sup><FiExternalLink /></sup></a>
        <a href={roadster.video} rel="noreferrer" target="_blank" className="roadster-link">Video <sup><FiExternalLink /></sup></a>
      </div>
    </div>
  );
};

export default Header;
