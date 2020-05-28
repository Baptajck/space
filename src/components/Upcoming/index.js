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

const optsDesktop = {
  height: '366',
  width: '600',
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
      <div className="upcoming-details upcoming-details--next reveal">
        <img srcSet={`${upcomingNextTryLinks.mission_patch} 1024w, ${upcomingNextTryLinks.mission_patch_small} 256w`} src={upcomingNextTryLinks.mission_patch} alt="icone" className="upcoming-details-image reveal-1" />
        <div className="reveal-3">
          <p className="upcoming-details-update">Last Update: {upcomingNextTry.last_date_update === 'Invalid Date' ? 'Coming next' : formatDateFR(upcomingNextTry.last_date_update)}</p>
          <h3 className="upcoming-details-name"><span>Name:</span> {upcomingNextTry.mission_name}</h3>
          <p className="upcoming-details-date"><span>Date launch:</span> {formatDateFR(upcomingNextTry.launch_date_local)}</p>
          <p className="upcoming-details--details"><span>Details:</span> {upcomingNextTry.details}</p>
          <p className="upcoming-details-update">Source: {upcomingNextTry.launch_date_source}</p>
        </div>
        <h3>Youtube</h3>
        <div className="upcoming-details--youtube reveal-4">
          <YouTube
            videoId={upcomingNextTryLinks.youtube_id}
            // className="upcoming-youtube"
            opts={document.body.clientWidth < 1023 ? optsMobile : optsDesktop}
          />
        </div>
        <hr className="upcoming-details-hr" />
      </div>

      <h2>Upcoming</h2>
      <div className="upcoming-container reveal">
        {upcoming.slice(1, 5)
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
          }) => (
            <div key={mission_name} className="upcoming-details">
              {mission_patch !== null && mission_patch_small !== null && (
              <img srcSet={`${mission_patch} 1024w, ${mission_patch_small} 256w`} src={mission_patch} alt="icone" className="upcoming-details-image reveal-2" />
              )}
              <p className="upcoming-details-update reveal-2">Last Update: {last_date_update === 'Invalid Date' ? 'Coming next' : formatDateFR(last_date_update)}</p>
              <h3 className="upcoming-details-name reveal-2"><span>Name:</span> {mission_name}</h3>
              <p className="upcoming-details-date reveal-3"><span>Date launch:</span> {formatDateFR(launch_date_local)}</p>
              <p className="upcoming-details-rocket-name reveal-3"><span>Name Rocket:</span> {rocket_name}</p>
              <p className="upcoming-details-rocket-launch-site reveal-3"><span>Name Site:</span> {site_name_long}</p>
              <p className="upcoming-details-update reveal-4">Source: {launch_date_source}</p>
              <hr className="upcoming-details-hr reveal-5" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Header;
