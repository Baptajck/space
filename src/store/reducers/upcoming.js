// == Initial State
const initialState = {
  upcoming: [],
  upcomingNextTry: [],
  upcomingNextTryLinks: [],
};

// == Types
export const FETCH_UPCOMING = 'FETCH_UPCOMING';
export const SHOW_UPCOMING = 'SHOW_UPCOMING';

export const FETCH_UPCOMING_NEXT_TRY = 'FETCH_UPCOMING_NEXT_TRY';
export const SHOW_UPCOMING_NEXT_TRY = 'SHOW_UPCOMING_NEXT_TRY';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_UPCOMING:
      return {
        ...state,
        upcoming: action.upcoming,
      };

    case SHOW_UPCOMING_NEXT_TRY:
      return {
        ...state,
        upcomingNextTry: action.upcomingNextTry,
        upcomingNextTryLinks: action.upcomingNextTryLinks,
      };

    default:
      return state;
  }
};

// == Action Creators
export const fetchUpcoming = () => ({
  type: FETCH_UPCOMING,
});

export const showUpcoming = (upcoming) => ({
  type: SHOW_UPCOMING,
  upcoming,
});

export const fetchUpcomingNextTry = () => ({
  type: FETCH_UPCOMING_NEXT_TRY,
});

export const showUpcomingNextTry = (upcomingNextTry, upcomingNextTryLinks) => ({
  type: SHOW_UPCOMING_NEXT_TRY,
  upcomingNextTry,
  upcomingNextTryLinks,
});


// == Export
export default reducer;
