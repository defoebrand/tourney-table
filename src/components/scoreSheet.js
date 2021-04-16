import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { displayScores } from '../helpers/displayHelpers';
import { addScoreToGame } from '../helpers/gameHelpers';

import { getTeams, getGames } from '../redux/actions';

const ScoreSheet = ({ dispatch, games }) => {
  const handleKeyPress = (e, game, side) => {
    if (e.key === 'Enter' || e.keycode === 13) {
      addScoreToGame(game, e.target.value, side);
      dispatch(getGames());
      dispatch(getTeams());
    }
  };

  return (
    <section>
      <p>Please input a score and press enter</p>
      <div className="score-sheet">
        {displayScores(games, handleKeyPress)}
      </div>
    </section>
  );
};

ScoreSheet.propTypes = {
  dispatch: PropTypes.func.isRequired,
  games: PropTypes.arrayOf(
    PropTypes.shape(),
  ),
};

ScoreSheet.defaultProps = {
  games: [],
};

export default connect((state) => ({
  games: state.getGamesReducer.games,
}))(ScoreSheet);
