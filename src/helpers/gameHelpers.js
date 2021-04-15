const addToStorage = (teamName) => {
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
};

const createTournament = (teamList) => {
  const games = [];
  const entries = Object.entries(teamList);
  for (let i = 0; i < entries.length; i += 1) {
    entries.slice(i + 1, entries.length).forEach((team) => (
      games.push({ [`${entries[i][1].Team}`]: '', [`${team[1].Team}`]: '' })
    ));
  }
  return games;
};

export { addToStorage, createTournament };
