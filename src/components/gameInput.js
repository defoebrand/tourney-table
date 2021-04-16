import PropTypes from 'prop-types';

const GameInput = ({
  gameID, onEnter, team1, team2,
}) => (
  <span className="score-input">
    <input
      type="number"
      onKeyPress={(e) => onEnter(e, gameID, team1)}
      placeholder="0"
    />
    {' : '}
    <input
      type="number"
      onKeyPress={(e) => onEnter(e, gameID, team2)}
      placeholder="0"
    />
  </span>
);

GameInput.propTypes = {
  onEnter: PropTypes.func.isRequired,
  gameID: PropTypes.number,
  team1: PropTypes.string,
  team2: PropTypes.string,
};

GameInput.defaultProps = {
  gameID: 0,
  team1: '',
  team2: '',
};

export default (GameInput);
