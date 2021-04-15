import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import addTeamName from '../helpers/teamAddition';
import { displayHeaders, displayTeams, displayScores } from '../helpers/displayHelpers';

const Home = () => {
  const [teamName, setTeamName] = useState('');

  const addTeamToDisplay = () => {
    addTeamName(teamName);
    setTeamName('');
  };

  const changeTeamName = (e) => {
    setTeamName(e.target.value);
  };

  return (
    <div className="home flex-center">
      <div>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="New Team"
            aria-label="New Team"
            aria-describedby="team-input"
            value={teamName}
            onChange={changeTeamName}
          />
          <InputGroup.Append>
            <InputGroup.Text id="add-btn" onClick={addTeamToDisplay}>Add Team</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
        <Table striped bordered hover size="sm" className="tourney-table">
          <thead>
            {displayHeaders()}
          </thead>
          <tbody>
            {displayTeams()}
          </tbody>
        </Table>
      </div>
      <div className="score-sheet">
        {displayScores()}
      </div>
    </div>
  );
};

export default Home;
