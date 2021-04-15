import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const Home = () => (
  <div className="home">
    <InputGroup className="mb-3">
      <FormControl
        placeholder="New Team"
        aria-label="New Team"
        aria-describedby="team-input"
      />
      <InputGroup.Append>
        <InputGroup.Text id="add-btn">Add Team</InputGroup.Text>
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
);

export default Home;
