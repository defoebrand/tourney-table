import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import { addTeam, getTeams } from '../redux/actions';

import createEntry from '../helpers/teamAddition';
import { displayHeaders, displayTeams, displayScores } from '../helpers/displayHelpers';

const Home = ({ team, dispatch, teamList }) => {
  useEffect(() => {
    dispatch(getTeams());
    console.log(team);
  }, []);
  const [teamName, setTeamName] = useState('');

  const addTeamToDisplay = () => {
    dispatch(addTeam(teamName));
    createEntry(teamName);
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
            {displayHeaders(Object.keys(teamList[0]))}
          </thead>
          <tbody>
            {displayTeams(teamList)}
          </tbody>
        </Table>
      </div>
      <div className="score-sheet">
        {displayScores()}
      </div>
    </div>
  );
};

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  team: PropTypes.string,
  teamList: PropTypes.arrayOf(
    PropTypes.shape(),
  ),
};

Home.defaultProps = {
  team: '',
  teamList: [{
    Place: '',
    Team: '',
    Played: '',
    Win: '',
    Draw: '',
    Loss: '',
    Points: '',
  }],
};

export default connect((state) => ({
  team: state.addTeamReducer.team,
  teamList: state.getTeamsReducer.teams,
}))(Home);
