import PropTypes from 'prop-types';

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const TeamInput = ({ addTeam, setTeam, teamName }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.keycode === 13) {
      addTeam();
    }
  };
  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="New Team"
        aria-label="New Team"
        aria-describedby="team-input"
        value={teamName}
        onChange={setTeam}
        onKeyPress={handleKeyPress}
      />
      <InputGroup.Append>
        <InputGroup.Text id="add-btn" onClick={addTeam}>Add Team</InputGroup.Text>
      </InputGroup.Append>
    </InputGroup>
  );
};

TeamInput.propTypes = {
  addTeam: PropTypes.func.isRequired,
  setTeam: PropTypes.func.isRequired,
  teamName: PropTypes.string,

};

TeamInput.defaultProps = {
  teamName: '',
};

export default (TeamInput);
