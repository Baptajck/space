/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';

import './header.scss';

import numberAbbreviation from 'src/utils';

const Header = ({
  fetchInfoCompany,
  infoCompany: {
    name,
    ceo,
    valuation,
    summary,
  },
  infoSite: {
    website,
  },
}) => {
  useEffect(() => {
    fetchInfoCompany();
  }, []);
  return (
    <div className="header">
      <img src="https://i.imgur.com/KyG7CYJ.jpg" alt="Space X" className="header-image" />
      <h1 className="header-title">{name}</h1>
      <p className="header-ceo">The CEO is <strong>{ceo}</strong></p>
      <div className="header-summary">
        <p className="header-summary-question">What is Space X ?</p>
        <p className="header-summary-text">{summary} this business is established the company valuation at approximately US$ {numberAbbreviation(Number(valuation))}.</p>
      </div>
      <button type="button" className="header-button"><a href={website} className="header-button-link">Site officiel</a></button>
    </div>
  );
};

export default Header;
