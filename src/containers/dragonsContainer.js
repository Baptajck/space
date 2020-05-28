// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Dragons from 'src/components/Dragons';

// Action Creators
import { fetchDragons } from 'src/store/reducers/dragons';

const mapStateToProps = (state) => ({
  dragons: state.dragons.dragons,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDragons: () => {
    dispatch(fetchDragons());
  },
});

// Container
const dragonsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dragons);

// == Export
export default dragonsContainer;
