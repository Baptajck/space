/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { FiExternalLink } from 'react-icons/fi';

import './history.scss';

import { formatDateFR, truncStr } from 'src/utils';

const Header = ({
  fetchHistory,
  history,
}) => {
  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <div className="history reveal">
      <h2 className="history-title">Last Historical Events</h2>
      <div className="history-container">
        {history.slice(0, 6)
          .map(({
            id, title, event_date_utc, details, flight_number, links: { article },
          }) => (
            <div key={id} className="history-cards reveal-1">
              <h3 className="history-cards-title">{title}</h3>
              <div className="history-cards-container--infos reveal-2">
                <p className="history-cards-date">Date: {formatDateFR(event_date_utc)}</p>
                <p className="history-cards-flight">Flight number: {flight_number}</p>
              </div>
              <p className="history-cards-details reveal-3">{truncStr(details, 250)}</p>
              <div className="history-cards-links">
                <a href={article} rel="noreferrer" target="_blank" className="history-cards-links-item reveal-4">Read More <sup><FiExternalLink /></sup></a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Header;
