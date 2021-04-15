import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import addTeamName from '../helpers/teamAddition';

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
            <tr>
              <th>Place</th>
              <th>Team</th>
              <th>Played</th>
              <th>Win</th>
              <th>Draw</th>
              <th>Loss</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <th>Greece</th>
              <th>2</th>
              <th>2</th>
              <th>0</th>
              <th>0</th>
              <th>6</th>
            </tr>
            <tr>
              <th>2</th>
              <th>Argentina</th>
              <th>2</th>
              <th>1</th>
              <th>0</th>
              <th>1</th>
              <th>3</th>
            </tr>
            <tr>
              <th>3</th>
              <th>Germany</th>
              <th>1</th>
              <th>0</th>
              <th>1</th>
              <th>0</th>
              <th>1</th>
            </tr>
            <tr>
              <th>4</th>
              <th>Italy</th>
              <th>3</th>
              <th>0</th>
              <th>1</th>
              <th>2</th>
              <th>1</th>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="score-sheet">
        <span className="team1">Greece</span>
        <span className="score">2:0</span>
        <span className="team2">Italy</span>

        <span className="team1">Argentina</span>
        <span className="score">2:3</span>
        <span className="team2">Greece</span>

        <span className="team1">Argentina</span>
        <span className="score">2:0</span>
        <span className="team2">Italy</span>

        <span className="team1">Italy</span>
        <span className="score">0:0</span>
        <span className="team2">Germany</span>

        <span className="team1">Greece</span>
        <span className="score">0:0</span>
        <span className="team2">Germany</span>

        <span className="team1">Germany</span>
        <span className="score">0:0</span>
        <span className="team2">Argentina</span>
      </div>
    </div>
  );
};

export default Home;
