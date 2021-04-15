import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import { getTeams } from '../redux/actions';

import { addToStorage } from '../helpers/teamAddition';
import { displayHeaders, displayTeams, displayScores } from '../helpers/displayHelpers';

const Home = ({ dispatch, teamList }) => {
  useEffect(() => {
    dispatch(getTeams());
  }, []);
  const [teamName, setTeamName] = useState('');

  const addTeamToDisplay = () => {
    addToStorage(teamName);
    setTeamName('');
    dispatch(getTeams());
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
            {console.log(teamList)}
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
  teamList: PropTypes.arrayOf(
    PropTypes.shape(),
  ),
};

Home.defaultProps = {
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
  teamList: state.getTeamsReducer.teams,
}))(Home);
