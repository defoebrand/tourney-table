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
  const roster = JSON.parse(localStorage.roster);
  if (!roster.includes(teamName)) {
    localStorage.roster = JSON.stringify([...roster, teamName]);
  }

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

export { addTeamToStorage, createTournament, addScoreToGame };
