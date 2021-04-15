const createEntry = (name) => {
  const table = document.querySelector('table');
  const newRow = document.createElement('tr');
  const newRank = document.createElement('th');
  const newTeam = document.createElement('th');
  newTeam.textContent = name;
  const newPlayed = document.createElement('th');
  const newWin = document.createElement('th');
  const newDraw = document.createElement('th');
  const newLoss = document.createElement('th');
  const newPoints = document.createElement('th');
  newRow.appendChild(newRank);
  newRow.appendChild(newTeam);
  newRow.appendChild(newPlayed);
  newRow.appendChild(newWin);
  newRow.appendChild(newDraw);
  newRow.appendChild(newLoss);
  newRow.appendChild(newPoints);
  table.appendChild(newRow);
};

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
  }
};

export { createEntry, addToStorage };
