/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';

import './dragons.scss';

import { formatDateFR } from 'src/utils';

const Header = ({ fetchDragons, dragons }) => {
  useEffect(() => {
    fetchDragons();
  }, []);

  return (
    <div className="dragons reveal">
      {/* <h1 className="dragons-title">Dragons</h1> */}
      <div className="dragons-container reveal-1">
        {dragons.map(({
          id,
          name,
          description,
          crew_capacity,
          orbit_duration_yr,
          first_flight,
          launch_payload_mass,
          return_payload_mass,
          height_w_trunk,
          diameter,
          trunk,
          pressurized_capsule,
        }) => (
          <>
            <div key={id} className="dragons-container-container">
              <h2 className="dragons-container-title">{name}</h2>
              <p className="dragons-container-desc reveal-3">{description}</p>
              <div className="dragons-table reveal-4">
                <table className="dragons-table-tg">
                  <thead>
                    <tr>
                      <th className="dragons-table-tg-1lax" colSpan="2">Overview</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>First flight</td>
                      <td className="dragons-table-tg-0lax" colSpan="2">{formatDateFR(first_flight)}</td>
                    </tr>
                    <tr>
                      <td>Orbit duration</td>
                      <td className="dragons-table-tg-0lax" colSpan="2">{orbit_duration_yr} year{orbit_duration_yr > 1 ? 's' : '0'}</td>
                    </tr>
                    <tr>
                      <td>Crew capacity</td>
                      <td className="dragons-table-tg-0lax" colSpan="2">{crew_capacity}</td>
                    </tr>
                    <tr>
                      <td>HEIGHT</td>
                      <td className="dragons-table-tg-0lax" colSpan="2">{height_w_trunk.meters} m <span className="dragon-table--span">/ {height_w_trunk.feet} ft</span></td>
                    </tr>
                    <tr>
                      <td>DIAMETER</td>
                      <td className="dragons-table-tg-0lax" colSpan="2">{diameter.meters} m <span className="dragon-table--span">/ {diameter.feet} ft</span></td>
                    </tr>
                    <tr>
                      <td>CAPSULE VOLUME</td>
                      <td className="dragons-table-tg-0lax" colSpan="2">{pressurized_capsule.payload_volume.cubic_meters} m&#xB3;<span className="dragon-table--span">/ {pressurized_capsule.payload_volume.cubic_feet} ft&#xB3;</span></td>
                    </tr>
                    <tr>
                      <td>TRUNK VOLUME</td>
                      <td className="dragons-table-tg-0lax" colSpan="2">{trunk.trunk_volume.cubic_meters} m&#xB3;<span className="dragon-table--span">/ {trunk.trunk_volume.cubic_feet} ft&#xB3;</span></td>
                    </tr>
                    <tr>
                      <td>LAUNCH PAYLOAD MASS</td>
                      <td className="dragons-table-tg-0lax" colSpan="2">{launch_payload_mass.kg} kg <span className="dragon-table--span">/ {launch_payload_mass.lb} lbs</span></td>
                    </tr>
                    <tr>
                      <td>RETURN PAYLOAD MASS</td>
                      <td className="dragons-table-tg-0lax" colSpan="2">{return_payload_mass.kg} kg <span className="dragon-table--span">/ {return_payload_mass.lb} lbs</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <hr className="dragons--hr reveal-2" />
          </>
        ))}
      </div>
    </div>
  );
};

export default Header;
