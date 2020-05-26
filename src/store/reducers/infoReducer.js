// == Initial State
const initialState = {
  infoCompany: {},
  infoSite: {},
};

// == Types
export const FETCH_INFO_COMPANY = 'FETCH_INFO_COMPANY';
export const SHOW_INFO_COMPANY = 'SHOW_INFO_COMPANY';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_INFO_COMPANY:
      return {
        ...state,
        infoCompany: action.infoCompany,
        infoSite: action.infoSite,
      };

    default:
      return state;
  }
};

// == Action Creators
export const fetchInfoCompany = () => ({
  type: FETCH_INFO_COMPANY,
});

export const showInfoCompany = (infoCompany, infoSite) => ({
  type: SHOW_INFO_COMPANY,
  infoCompany,
  infoSite,
});


// == Selectors


// == Export
export default reducer;
