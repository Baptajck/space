import { combineReducers } from 'redux';

import infoReducer from './infoReducer';
import history from './history';
import upcoming from './upcoming';
import dragons from './dragons';

const reducer = combineReducers({
  infoReducer,
  history,
  upcoming,
  dragons,
});

export default reducer;
