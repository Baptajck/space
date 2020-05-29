/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { FiExternalLink } from 'react-icons/fi';
// import { formatDateFR } from 'src/utils';
import './roadster.scss';

const Header = ({ fetchRoadster, roadster }) => {
  useEffect(() => {
    fetchRoadster();
  }, []);

  console.log(roadster);

  return (
    <div className="roadster">
      <h1 className="roadster-title">funny bonus</h1>
      <p className="roadster-name">{roadster.name}</p>
      <img src={roadster.flickr_images} alt="Car in space" className="roadster-img" />
      <p className="roadster-desc">{roadster.details}</p>
      <a href={roadster.wikipedia} rel="noreferrer" target="_blank" className="roadster-link">wikipedia <sup><FiExternalLink /></sup></a>
      <a href={roadster.video} rel="noreferrer" target="_blank" className="roadster-link">Video <sup><FiExternalLink /></sup></a>
    </div>
  );
};

export default Header;
