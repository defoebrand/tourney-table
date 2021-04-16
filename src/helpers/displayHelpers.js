import ScoreInput from '../components/scoreInput';

const displayHeaders = (headers) => (
  <tr>
    {headers.map((header) => {
      if (['Win', 'Draw', 'Loss'].includes(header)) {
        return (
          <th key={header} className="sm-drop">{header}</th>
        );
      }
      return (
        <th key={header}>{header}</th>
      );
    })}
  </tr>
);

const displayTeams = (teamList) => {
  if (teamList[0].Team !== '') {
    let position = 0;
    let lastPlace = 0;
    return (
      teamList.sort((a, b) => b.Points - a.Points).map((teams, ind) => (
        <tr key={`${teams.Team}`}>
          {Object.entries(teams).map((data) => {
            if (data[0] === 'Place') {
              if (teamList[ind].Points < teamList[position].Points) {
                position += 1;
                lastPlace += 1;
                return (<td key={data[0]}>{position + 1}</td>);
              }
              if (teamList[ind].Points === teamList[position].Points) {
                if (teamList[ind].Played === 0) {
                  lastPlace += 1;
                  const played = teamList.map((team) => team.Played);

                  if (played.every((games) => games === 0)) {
                    return (<td key={data[0]}>{lastPlace}</td>);
                  }
                  return (<td key={data[0]}>{lastPlace + 1}</td>);
                }
                return (<td key={data[0]}>{position + 1}</td>);
              }
            }
            if (['Win', 'Draw', 'Loss'].includes(data[0])) {
              return (<td key={data[0]} className="sm-drop">{data[1]}</td>);
            }
            return (
              <td key={data[0]}>{data[1]}</td>
            );
          })}
        </tr>
      ))
    );
  }
  return <tr />;
};

const displayScores = (games, handleKeyPress) => (
  games.map((game) => {
    const [team1, team2] = Object.keys(game).splice(1, 2);
    const [team1Score, team2Score] = Object.values(game).splice(1, 2);
    return (
      <>
        <span className="team1">{team1}</span>

        {team1Score === '' || team2Score === ''
          ? <ScoreInput onEnter={handleKeyPress} gameID={game.id} team1={team1} team2={team2} />
          : <span className="score">{`${team1Score} : ${(team2Score)}`}</span>}

        <span className="team2">{team2}</span>
      </>
    );
  })
);

export { displayHeaders, displayTeams, displayScores };
