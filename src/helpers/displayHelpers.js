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

const displayWins = (games) => {
  console.log('displayWins');
  console.log(games);
};

const displayRank = () => {
  console.log('displayRank');
  return 1;
  // let position = 0;
  // let lastPlace = 0;
  // if (teamList[ind].Points < teamList[position].Points) {
  //   position += 1;
  //   lastPlace += 1;
  //   return (<td key={data[0]}>{position + 1}</td>);
  // }
  // if (teamList[ind].Points === teamList[position].Points) {
  //   if (teamList[ind].Played === 0) {
  //     lastPlace += 1;
  //     const played = teamList.map((team) => team.Played);
  //
  //     if (played.every((games) => games === 0)) {
  //       return (<td key={data[0]}>{lastPlace}</td>);
  //     }
  //     return (<td key={data[0]}>{lastPlace + 1}</td>);
  //   }
  //   return (<td key={data[0]}>{position + 1}</td>);
  // }
};

const createRow = (roster, headers, games) => {
  console.log(roster);
  console.log(headers);
  console.log(games);
};

const getKeys = () => {
  const keys = [];
  for (const i in this) {
    if (this.hasOwnProperty(i)) {
      keys.push(i);
    }
  }
  return keys;
};

const displayRoster = (roster, headers, games) => {
  const sortGames = () => {
    const hash = {};
    console.log('sortGames');
    games.map((game) => {
      // for (let i = 0; i < game.length; i += 1) {
      for (props in game) {
        console.log('here');
        console.log(game);
      }

      // }
      if (hash[game]) {
        hash[game] += 1;
      } else {
        hash[game] = 1;
      }
      console.log(game);
      return hash;
      // console.log(game)
    });
    return hash;
  };
  sortGames();
  console.log(sortGames());
  if (roster.length !== 0) {
    for (let i = 0; i < roster.length; i += 1) {
      return (
        <tr>
          {headers.map((header) => {
            createRow(roster[i], header, games);
            switch (header) {
              case 'Place':
                return (<td key={header}>{displayRank()}</td>);
              case 'Win':
                return (<td key={header} className="sm-drop">{displayWins(games, roster[i])}</td>);
              case 'Draw':
                return (<td key={header} className="sm-drop">{roster[i]}</td>);
              case 'Loss':
                return (<td key={header} className="sm-drop">{roster[i]}</td>);
              default:
                return <td key={header}>{roster[i]}</td>;
            }
          })}
        </tr>
      );
    }
  }
  return <tr />;
};

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

export {
  displayHeaders, displayTeams, displayScores, displayRoster,
};
