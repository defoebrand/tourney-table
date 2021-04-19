import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import {
  getTeams, getGames, getHeaders, getRoster,
} from '../redux/actions';
import { addTeamToStorage } from '../helpers/gameHelpers';

const TeamInput = ({ dispatch, roster }) => {
  const [teamName, setTeamName] = useState('');

  useEffect(() => {
    dispatch(getTeams());
    dispatch(getGames());
    dispatch(getHeaders());
    dispatch(getRoster());
  }, []);

  const addTeamToDisplay = () => {
    const inputBox = document.querySelector('.form-control');
    if (teamName !== '' && !roster.includes(teamName)) {
      addTeamToStorage(teamName);
      setTeamName('');
      dispatch(getTeams());
      dispatch(getGames());
      inputBox.style.border = '2px solid gray';
    } else {
      inputBox.style.border = '3px solid red';
    }
  };

  const changeTeamName = (e) => {
    setTeamName(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.keycode === 13) {
      addTeamToDisplay();
    }
  };

  return (
    <InputGroup className="mb-3">
      {console.log(roster)}
      <FormControl
        placeholder="New Team"
        aria-label="New Team"
        aria-describedby="team-input"
        value={teamName}
        onChange={changeTeamName}
        onKeyPress={handleKeyPress}
      />
      <InputGroup.Append>
        <InputGroup.Text id="add-btn" onClick={addTeamToDisplay}>Add Team</InputGroup.Text>
      </InputGroup.Append>
    </InputGroup>
  );
};

TeamInput.propTypes = {
  dispatch: PropTypes.func.isRequired,
  roster: PropTypes.arrayOf(
    PropTypes.string,
  ),
};

TeamInput.defaultProps = {
  roster: ['pie'],
};

export default connect((state) => ({
  roster: state.getRosterReducer.roster,
}))(TeamInput);
