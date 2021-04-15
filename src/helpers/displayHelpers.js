const displayHeaders = (headers) => (
  <tr>
    {headers.map((header) => (
      <th key={header}>{header}</th>
    ))}
  </tr>
);

const displayTeams = (teamList) => {
  if (teamList[0].Team !== '') {
    return (
      teamList.map((teams) => (
        <tr key={teamList.indexOf(teams)}>
          {Object.entries(teams).map((data) => (
            <th key={data[0]}>{data[1]}</th>
          ))}
        </tr>
      ))
    );
  }
  return <tr />;
};

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

export { displayHeaders, displayTeams, displayScores };
