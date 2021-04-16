import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addScoreToGame } from '../helpers/gameHelpers';

import { getTeams, getGames } from '../redux/actions';

const ScoreInput = ({
  gameID, dispatch, team1, team2,
}) => {
  const handleKeyPress = (e, game, side) => {
    if (e.key === 'Enter' || e.keycode === 13) {
      addScoreToGame(game, e.target.value, side);
      dispatch(getGames());
      dispatch(getTeams());
    }
  };
  return (
    <span className="score-input">
      <input
        type="number"
        onKeyPress={(e) => handleKeyPress(e, gameID, team1)}
        placeholder="0"
      />
      {' : '}
      <input
        type="number"
        onKeyPress={(e) => handleKeyPress(e, gameID, team2)}
        placeholder="0"
      />
    </span>
  );
};

ScoreInput.propTypes = {
  dispatch: PropTypes.func.isRequired,
  gameID: PropTypes.number,
  team1: PropTypes.string,
  team2: PropTypes.string,
};

ScoreInput.defaultProps = {
  gameID: 0,
  team1: '',
  team2: '',
};

export default connect(null)(ScoreInput);
