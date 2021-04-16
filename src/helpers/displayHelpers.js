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
        <tr key={`${teams.Team}`}>
          {Object.entries(teams).map((data) => (
            <th key={data[0]}>{data[1]}</th>
          ))}
        </tr>
      ))
    );
  }
  return <tr />;
};

const addScoreToGame = (currGame, value, side) => {
  const games = JSON.parse(localStorage.games);

  const thisGame = games.find((elem) => elem.id === currGame);
  thisGame[side] = value;

  localStorage.games = JSON.stringify(games);

  if (Object.values(thisGame)[1] !== '' && Object.values(thisGame)[2] !== '') {
    const winner = Object.keys(games[currGame]).splice(1, 2)
      .reduce((a, b) => (games[currGame][a] > games[currGame][b] ? a : b));
    const loser = Object.keys(games[currGame]).splice(1, 2)
      .reduce((a, b) => (games[currGame][a] < games[currGame][b] ? a : b));

    const teamList = JSON.parse(localStorage.teamList);
    if (winner === loser) {
      let otherTeam = Object.keys(games[currGame]);

      otherTeam = otherTeam.filter((n) => !['id', winner].includes(n));
      const firstTeam = teamList.find((team) => team.Team === winner);
      const secondTeam = teamList.find((team) => team.Team === otherTeam[0]);
      firstTeam.Played += 1;
      firstTeam.Points += 1;
      firstTeam.Draw += 1;
      secondTeam.Played += 1;
      secondTeam.Points += 1;
      secondTeam.Draw += 1;
    } else {
      const winningTeam = teamList.find((team) => team.Team === winner);
      winningTeam.Played += 1;
      winningTeam.Win += 1;
      winningTeam.Points += 3;
      const losingTeam = teamList.find((team) => team.Team === loser);
      losingTeam.Played += 1;
      losingTeam.Loss += 1;
    }
    localStorage.teamList = JSON.stringify(teamList);
  }
};

const displayScores = (games, dispatch, getGames, getTeams) => {
  const handleKeyPress = (e, game, side) => {
    if (e.key === 'Enter' || e.keycode === 13) {
      addScoreToGame(game, e.target.value, side);
      dispatch(getGames());
      dispatch(getTeams());
    }
  };
  return (
    games.map((game) => (
      <>
        <span className="team1">{(Object.keys(game)[1])}</span>
        {Object.values(game)[1] === '' || Object.values(game)[2] === ''
          ? (
            <span className="score-input">
              <input
                type="text"
                onKeyPress={(e) => handleKeyPress(e, game.id, Object.keys(game)[1])}
                placeholder="0"
              />
              {' : '}
              <input
                type="text"
                onKeyPress={(e) => handleKeyPress(e, game.id, Object.keys(game)[2])}
                placeholder="0"
              />
            </span>
          )
          : <span className="score">{`${(Object.values(game)[1])} : ${(Object.values(game)[2])}`}</span>}
        <span className="team2">{(Object.keys(game)[2])}</span>
      </>
    ))
  );
};

export { displayHeaders, displayTeams, displayScores };
