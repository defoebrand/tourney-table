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

export default createEntry;
