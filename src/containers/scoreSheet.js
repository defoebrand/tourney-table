import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { displayScores } from '../helpers/displayHelpers';

const ScoreSheet = ({ games }) => (
  <section>
    <p>Please input a score and press enter</p>
    <div className="score-sheet">
      {displayScores(games)}
    </div>
  </section>
);

ScoreSheet.propTypes = {
  games: PropTypes.arrayOf(
    PropTypes.shape(),
  ),
};

ScoreSheet.defaultProps = {
  games: [{}],
};

export default connect((state) => ({
  games: state.getGamesReducer.games,
}))(ScoreSheet);
