import { combineReducers } from 'redux';

import infoReducer from './infoReducer';
import history from './history';
import upcoming from './upcoming';
import dragons from './dragons';
import roadster from './roadster';

const reducer = combineReducers({
  infoReducer,
  history,
  upcoming,
  dragons,
  roadster,
});

export default reducer;
