/* eslint-disable no-lone-blocks */
/* eslint-disable no-console */
import axios from 'axios';

import { FETCH_INFO_COMPANY, showInfoCompany } from 'src/store/reducers/infoReducer';
import { FETCH_HISTORY, showHistory } from 'src/store/reducers/history';

const urlApi = 'https://api.spacexdata.com/v3';

const fetchData = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_INFO_COMPANY: {
      axios.get(`${urlApi}/info`)
        .then((res) => {
          store.dispatch(showInfoCompany(res.data, res.data.links));
        })
        .catch();
    }
      break;
    case FETCH_HISTORY: {
      axios.get(`${urlApi}/history?order=desc`)
        .then((res) => {
          store.dispatch(showHistory(res.data));
        })
        .catch();
    }
      break;
    default:
      next(action);
  }
};

export default fetchData;
