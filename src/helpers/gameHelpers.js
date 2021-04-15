const createTournament = (teamList, gamesList) => {
  const games = [];
  const entries = Object.entries(teamList);
  for (let i = 0; i < entries.length; i += 1) {
    entries.slice(i + 1, entries.length).forEach((team) => {
      games.push({ id: games.length, [`${entries[i][1].Team}`]: '', [`${team[1].Team}`]: '' });
    });
  }
  if (gamesList !== undefined) {
    gamesList.forEach((gameData) => {
      const swapGame = games.filter((game) => (
        Object.keys(game)[1] === Object.keys(gameData)[1]
      && Object.keys(game)[2] === Object.keys(gameData)[2]
      ));
      for (let i = 0; i < swapGame.length; i += 1) {
        games[swapGame[i].id] = gameData;
      }
    });
  }
  return games;
};

const addGameToStorage = (teamList) => {
  const games = JSON.parse(localStorage.games);

  if (games.length === 0) {
    localStorage.games = JSON.stringify(createTournament(teamList));
  } else {
    const toStore = createTournament(teamList, games);
    localStorage.games = JSON.stringify(toStore);
  }
};

const addTeamToStorage = (teamName) => {
  const teams = JSON.parse(localStorage.teamList);

  if (teams[0].Team === '') {
    localStorage.teamList = JSON.stringify([{
      Place: teams.length,
      Team: teamName,
      Played: 0,
      Win: 0,
      Draw: 0,
      Loss: 0,
      Points: 0,
    }]);
  } else {
    const toStore = [...teams, {
      Place: teams.length + 1,
      Team: teamName,
      Played: 0,
      Win: 0,
      Draw: 0,
      Loss: 0,
      Points: 0,
    }];
    localStorage.teamList = JSON.stringify(toStore);
  }
  addGameToStorage(JSON.parse(localStorage.teamList));
};

export { addTeamToStorage, createTournament };
