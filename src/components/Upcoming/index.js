/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import YouTube from 'react-youtube';

import './upcoming.scss';

import { formatDateFR } from 'src/utils';

/* Option for youtube */
const optsMobile = {
  height: '183',
  width: '300',
  playerVars: {
    autoplay: 0,
  },
};

const Header = ({
  fetchUpcoming,
  upcoming,
  fetchUpcomingNextTry,
  upcomingNextTry,
  upcomingNextTryLinks,
}) => {
  useEffect(() => {
    fetchUpcoming();
    fetchUpcomingNextTry();
  }, []);

  return (
    <div className="upcoming">
      <h1 className="upcoming-title">Upcoming</h1>

      <h2>Next Mission</h2>
      <div className="upcoming-details upcoming-details--next">
        <img srcSet={`${upcomingNextTryLinks.mission_patch} 1024w, ${upcomingNextTryLinks.mission_patch_small} 256w`} src={upcomingNextTryLinks.mission_patch} alt="icone" className="upcoming-details-image" />
        <p className="upcoming-details-update">Last Update: {upcomingNextTry.last_date_update === 'Invalid Date' ? 'Coming next' : formatDateFR(upcomingNextTry.last_date_update)}</p>
        <h3 className="upcoming-details-name"><span>Name:</span> {upcomingNextTry.mission_name}</h3>
        <p className="upcoming-details-date"><span>Date launch:</span> {formatDateFR(upcomingNextTry.launch_date_local)}</p>
        <p className="upcoming-details-date"><span>Details:</span> {upcomingNextTry.details}</p>
        <p className="upcoming-details-update">Source: {upcomingNextTry.launch_date_source}</p>
        <h3>Youtube</h3>
        <div className="upcoming-details--youtube">
          <YouTube
            videoId={upcomingNextTryLinks.youtube_id}
            className={document.body.clientWidth < 1024 ? 'upcoming-youtube' : optsMobile}
          />
        </div>
        <hr className="upcoming-details-hr" />
      </div>

      <h2>Upcoming</h2>
      <div className="upcoming-container">
        {upcoming.slice(1, 4)
          .map(({
            mission_name,
            launch_date_local,
            rocket: {
              rocket_name,
            },
            links: {
              mission_patch,
              mission_patch_small,
            },
            last_date_update,
            launch_site: {
              site_name_long,
            },
            launch_date_source,
          }, index) => (
            <div key={index} className="upcoming-details">
              {mission_patch !== null && mission_patch_small !== null && (
              <img srcSet={`${mission_patch} 1024w, ${mission_patch_small} 256w`} src={mission_patch} alt="icone" className="upcoming-details-image" />
              )}
              <p className="upcoming-details-update">Last Update: {last_date_update === 'Invalid Date' ? 'Coming next' : formatDateFR(last_date_update)}</p>
              <h3 className="upcoming-details-name"><span>Name:</span> {mission_name}</h3>
              <p className="upcoming-details-date"><span>Date launch:</span> {formatDateFR(launch_date_local)}</p>
              <p className="upcoming-details-rocket-name"><span>Name Rocket:</span> {rocket_name}</p>
              <p className="upcoming-details-rocket-launch-site"><span>Name Site:</span> {site_name_long}</p>
              <p className="upcoming-details-update">Source: {launch_date_source}</p>
              <hr className="upcoming-details-hr" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Header;
