// == Initial State
const initialState = {
  dragons: [],
};

// == Types
export const FETCH_DRAGONS = 'FETCH_DRAGONS';
export const SHOW_DRAGONS = 'SHOW_DRAGONS';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_DRAGONS:
      return {
        ...state,
        dragons: action.dragons,
      };

    default:
      return state;
  }
};

// == Action Creators
export const fetchDragons = () => ({
  type: FETCH_DRAGONS,
});

export const showDragons = (dragons) => ({
  type: SHOW_DRAGONS,
  dragons,
});


// == Export
export default reducer;
