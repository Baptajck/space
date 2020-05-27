/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';

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
    <div className="history">
      <h2 className="history-title">HISTORY</h2>
      <div className="history-container">
        {history.slice(0, 6)
          .map(({
            id, title, event_date_utc, details, flight_number, links: { article, wikipedia },
          }) => (
            <div key={id} className="history-cards">
              <h3 className="history-cards-title">{title}</h3>
              <div className="history-cards-container--infos">
                <p className="history-cards-date">Date: {formatDateFR(event_date_utc)}</p>
                <p className="history-cards-flight">Flight number: {flight_number}</p>
              </div>
              <p className="history-cards-details">{truncStr(details, 250)}</p>
              <div className="history-cards-links">
                <a href={article} className="history-cards-links-item">article</a>
                <a href={wikipedia} className="history-cards-links-item">wikipedia</a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Header;
