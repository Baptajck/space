import { combineReducers } from 'redux';

import infoReducer from './infoReducer';
import history from './history';
import upcoming from './upcoming';

const reducer = combineReducers({
  infoReducer,
  history,
  upcoming,
});

export default reducer;
