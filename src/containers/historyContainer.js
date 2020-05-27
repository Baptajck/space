// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import History from 'src/components/History';

// Action Creators
import { fetchHistory } from 'src/store/reducers/history';

const mapStateToProps = (state) => ({
  history: state.history.history,
});

const mapDispatchToProps = (dispatch) => ({
  fetchHistory: () => {
    dispatch(fetchHistory());
  },
});

// Container
const historyContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(History);

// == Export
export default historyContainer;
