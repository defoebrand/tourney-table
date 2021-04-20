import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Table from 'react-bootstrap/Table';

import { displayHeaders, displayTeams, displayRoster } from '../helpers/displayHelpers';

const TeamTable = ({
  teamList, headers, roster, games,
}) => (
  <Table striped bordered hover size="sm" className="tourney-table">
    <thead>
      {displayHeaders(headers)}
    </thead>
    <tbody>
      {displayRoster(roster, headers, games)}
      {displayTeams(teamList)}
    </tbody>
  </Table>
);

TeamTable.propTypes = {
  games: PropTypes.arrayOf(
    PropTypes.shape(),
  ),
  teamList: PropTypes.arrayOf(
    PropTypes.shape(),
  ),
  headers: PropTypes.arrayOf(
    PropTypes.string,
  ),
  roster: PropTypes.arrayOf(
    PropTypes.string,
  ),
};

TeamTable.defaultProps = {
  teamList: [{
    Place: '',
    Team: '',
    Played: '',
    Win: '',
    Draw: '',
    Loss: '',
    Points: '',
  }],
  headers: [],
  roster: [],
  games: [{}],
};

export default connect((state) => ({
  games: state.getGamesReducer.games,
  teamList: state.getTeamsReducer.teamList,
  headers: state.getHeadersReducer.headers,
  roster: state.getRosterReducer.roster,
}))(TeamTable);
