import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import ScoreSheet from '../components/scoreSheet';

import { getTeams, getGames } from '../redux/actions';

import { addTeamToStorage } from '../helpers/gameHelpers';
import { displayHeaders, displayTeams } from '../helpers/displayHelpers';

const Home = ({ dispatch, teamList }) => {
  const [teamName, setTeamName] = useState('');

  useEffect(() => {
    dispatch(getTeams());
    dispatch(getGames());
  }, []);

  const addTeamToDisplay = () => {
    addTeamToStorage(teamName);
    setTeamName('');
    dispatch(getTeams());
    dispatch(getGames());
  };

  const changeTeamName = (e) => {
    setTeamName(e.target.value);
  };

  return (
    <div className="home">
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
      <ScoreSheet />
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
  teamList: state.getTeamsReducer.teamList,
}))(Home);
