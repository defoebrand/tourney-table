import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import TeamInput from '../components/teamInput';
import TeamTable from '../components/teamTable';
import ScoreSheet from './scoreSheet';

import { getTeams, getGames } from '../redux/actions';

import { addTeamToStorage } from '../helpers/gameHelpers';

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
    <main className="home">
      <section>
        <TeamInput addTeam={addTeamToDisplay} setTeam={changeTeamName} teamName={teamName} />
        <TeamTable teamList={teamList} />
      </section>
      <ScoreSheet />
    </main>
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
