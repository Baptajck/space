// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Upcoming from 'src/components/Upcoming';

// Action Creators
import { fetchUpcoming, fetchUpcomingNextTry } from 'src/store/reducers/upcoming';

const mapStateToProps = (state) => ({
  upcoming: state.upcoming.upcoming,
  upcomingNextTry: state.upcoming.upcomingNextTry,
  upcomingNextTryLinks: state.upcoming.upcomingNextTryLinks,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUpcoming: () => {
    dispatch(fetchUpcoming());
  },
  fetchUpcomingNextTry: () => {
    dispatch(fetchUpcomingNextTry());
  },
});

// Container
const upcomingContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Upcoming);

// == Export
export default upcomingContainer;
