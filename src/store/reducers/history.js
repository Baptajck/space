// == Initial State
const initialState = {
  history: [],
};

// == Types
export const FETCH_HISTORY = 'FETCH_HISTORY';
export const SHOW_HISTORY = 'SHOW_HISTORY';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_HISTORY:
      return {
        ...state,
        history: action.history,
      };

    default:
      return state;
  }
};

// == Action Creators
export const fetchHistory = () => ({
  type: FETCH_HISTORY,
});

export const showHistory = (history) => ({
  type: SHOW_HISTORY,
  history,
});


// == Export
export default reducer;
