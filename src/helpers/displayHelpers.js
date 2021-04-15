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
  // games.forEach((game) => {
  // if (Object.keys(game)[0] === Object.keys(currGame)[0]
  //  && Object.keys(game)[1] === Object.keys(currGame)[1]) {
  //   console.log('match!');
  // } else {
  //   console.log('no match!');
  // }
  console.log(currGame);
  const thisGame = games.find((elem) => elem.id === currGame);
  thisGame[side] = value;
  console.log(thisGame);
  console.log(games);

  localStorage.games = JSON.stringify(games);

  // });
};

const displayScores = (games, dispatch, getGames) => {
  const handleKeyPress = (e, game, side) => {
    if (e.key === 'Enter' || e.keycode === 13) {
      addScoreToGame(game, e.target.value, side);
      dispatch(getGames());
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
