import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import addTeamName from '../helpers/teamAddition';

const Home = () => {
  const [teamName, setTeamName] = useState('');

  const team1 = [{
    Place: 1,
    Team: 'Greece',
    Played: 2,
    Win: 2,
    Draw: 0,
    Loss: 0,
    Points: 6,
  }, {
    Place: 2,
    Team: 'Argentina',
    Played: 2,
    Win: 1,
    Draw: 0,
    Loss: 1,
    Points: 3,
  }, {
    Place: 3,
    Team: 'Germany',
    Played: 1,
    Win: 0,
    Draw: 1,
    Loss: 0,
    Points: 1,
  }, {
    Place: 4,
    Team: 'Italy',
    Played: 3,
    Win: 0,
    Draw: 1,
    Loss: 2,
    Points: 1,
  },
  ];

  const displayHeaders = () => {
    const headers = ['Place', 'Team', 'Played', 'Win', 'Draw', 'Loss', 'Points'];
    return (
      <tr>
        {headers.map((header) => (
          <th key={header}>{header}</th>
        ))}
      </tr>
    );
  };

  const displayTeams = () => (
    team1.map((teams) => (
      <tr key={team1.indexOf(teams)}>
        {Object.entries(teams).map((data) => (
          <th key={`${data[0]}${data[1]}`}>{data[1]}</th>
        ))}
      </tr>
    )));

  const displayScores = () => (
    <>
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
    </>
  );

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
