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

export default addToStorage;
