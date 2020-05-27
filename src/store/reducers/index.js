import { combineReducers } from 'redux';

import infoReducer from './infoReducer';
import history from './history';

const reducer = combineReducers({
  infoReducer,
  history,
});

export default reducer;
