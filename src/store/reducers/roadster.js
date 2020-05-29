// == Initial State
const initialState = {
  roadster: [],
};

// == Types
export const FETCH_ROADSTER = 'FETCH_ROADSTER';
export const SHOW_ROADSTER = 'SHOW_ROADSTER';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_ROADSTER:
      return {
        ...state,
        roadster: action.roadster,
      };

    default:
      return state;
  }
};

// == Action Creators
export const fetchRoadster = () => ({
  type: FETCH_ROADSTER,
});

export const showRoadster = (roadster) => ({
  type: SHOW_ROADSTER,
  roadster,
});


// == Export
export default reducer;
