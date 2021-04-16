import TeamInput from '../components/teamInput';
import TeamTable from '../containers/teamTable';
import ScoreSheet from '../containers/scoreSheet';

const Home = () => (
  <main className="home">
    <section>
      <TeamInput />
      <TeamTable />
    </section>
    <ScoreSheet />
  </main>
);

export default Home;
