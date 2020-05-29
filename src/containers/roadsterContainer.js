// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Roadster from 'src/components/Roadster';

// Action Creators
import { fetchRoadster } from 'src/store/reducers/roadster';

const mapStateToProps = (state) => ({
  roadster: state.roadster.roadster,
});

const mapDispatchToProps = (dispatch) => ({
  fetchRoadster: () => {
    dispatch(fetchRoadster());
  },
});

// Container
const roadsterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Roadster);

// == Export
export default roadsterContainer;
