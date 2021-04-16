import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Table from 'react-bootstrap/Table';

import { displayHeaders, displayTeams } from '../helpers/displayHelpers';

const TeamTable = ({ teamList }) => (
  <Table striped bordered hover size="sm" className="tourney-table">
    <thead>
      {displayHeaders(Object.keys(teamList[0]))}
    </thead>
    <tbody>
      {displayTeams(teamList)}
    </tbody>
  </Table>
);

TeamTable.propTypes = {
  teamList: PropTypes.arrayOf(
    PropTypes.shape(),
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
};

export default connect((state) => ({
  teamList: state.getTeamsReducer.teamList,
}))(TeamTable);
