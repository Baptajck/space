/* eslint-disable no-lone-blocks */
/* eslint-disable no-console */
import axios from 'axios';

import { FETCH_INFO_COMPANY, showInfoCompany } from 'src/store/reducers/infoReducer';
import { FETCH_HISTORY, showHistory } from 'src/store/reducers/history';
import {
  FETCH_UPCOMING, showUpcoming, FETCH_UPCOMING_NEXT_TRY, showUpcomingNextTry,
} from 'src/store/reducers/upcoming';
import { FETCH_DRAGONS, showDragons } from 'src/store/reducers/dragons';

const urlApi = 'https://api.spacexdata.com/v3';

const fetchData = (store) => (next) => (action) => {
  switch (action.type) {
    /**
     * Data recovery from Space X company
     */
    case FETCH_INFO_COMPANY: {
      axios.get(`${urlApi}/info`)
        .then((res) => {
          store.dispatch(showInfoCompany(res.data, res.data.links));
        })
        .catch();
    }
      break;
    /**
     * Recovery of the history of the Space X company
     */
    case FETCH_HISTORY: {
      axios.get(`${urlApi}/history?order=desc`)
        .then((res) => {
          store.dispatch(showHistory(res.data));
        })
        .catch();
    }
      break;
    /**
     * Recovery of the next Space x missions
     */
    case FETCH_UPCOMING: {
      const date = new Date().getFullYear();
      axios.get(`${urlApi}/launches/upcoming?launch_year=${date}`)
        .then((res) => {
          store.dispatch(showUpcoming(res.data));
        })
        .catch();
    }
      break;
    /**
     * Recovery of the next Space x mission
     */
    case FETCH_UPCOMING_NEXT_TRY: {
      axios.get(`${urlApi}/launches/next`)
        .then((res) => {
          store.dispatch(showUpcomingNextTry(res.data, res.data.links));
        })
        .catch();
    }
      break;
    /**
     * Recovery of the next Space x mission
     */
    case FETCH_DRAGONS: {
      axios.get(`${urlApi}/dragons`)
        .then((res) => {
          store.dispatch(showDragons(res.data));
        })
        .catch();
    }
      break;
    default:
      next(action);
  }
};

export default fetchData;
