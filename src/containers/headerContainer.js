// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Header from 'src/components/Header';

// Action Creators
import { fetchInfoCompany } from 'src/store/reducers/infoReducer';

const mapStateToProps = (state) => ({
  infoCompany: state.infoReducer.infoCompany,
  infoSite: state.infoReducer.infoSite,
});

const mapDispatchToProps = (dispatch) => ({
  fetchInfoCompany: () => {
    dispatch(fetchInfoCompany());
  },
});

// Container
const headerContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

// == Export
export default headerContainer;
