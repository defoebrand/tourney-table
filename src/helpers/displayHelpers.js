const teamList = [{
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
  teamList.map((teams) => (
    <tr key={teamList.indexOf(teams)}>
      {Object.entries(teams).map((data) => (
        <th key={data[0]}>{data[1]}</th>
      ))}
    </tr>
  ))
);

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
