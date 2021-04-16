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
        const { id } = games[swapGame[i].id];
        games[swapGame[i].id] = gameData;
        games[swapGame[i].id].id = id;
      }
    });
  }
  return games;
};

const addGameToStorage = (teamList) => {
  const currentGames = JSON.parse(localStorage.games);

  if (currentGames.length === 0) {
    const toStore = createTournament(teamList);
    localStorage.games = JSON.stringify(toStore);
  } else {
    const toStore = createTournament(teamList, currentGames);
    localStorage.games = JSON.stringify(toStore);
  }
};

const addTeamToStorage = (teamName) => {
  const teams = JSON.parse(localStorage.teamList);

  if (teams[0].Team === '') {
    localStorage.teamList = JSON.stringify([{
      Place: `Starting Position: ${teams.length}`,
      Team: teamName,
      Played: 0,
      Win: 0,
      Draw: 0,
      Loss: 0,
      Points: 0,
    }]);
  } else {
    const toStore = [...teams, {
      Place: `Starting Position: ${teams.length + 1}`,
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
