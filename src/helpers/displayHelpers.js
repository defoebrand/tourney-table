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

const displayScores = (games) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.keycode === 13) {
      alert(e.target.value);
    }
  };
  return (
    games.map((game) => (
      <>
        <span className="team1">{(Object.keys(game)[0])}</span>
        {Object.values(game)[0] === '' || Object.values(game)[1] === ''
          ? (
            <span className="score-input">
              <input
                type="text"
                onKeyPress={handleKeyPress}
                placeholder="0"
              />
              {' : '}
              <input
                type="text"
                onKeyPress={handleKeyPress}
                placeholder="0"
              />
            </span>
          )
          : <span className="score">{`${(Object.values(game)[0])} : ${(Object.values(game)[1])}`}</span>}
        <span className="team2">{(Object.keys(game)[1])}</span>
      </>
    ))
  );
};

export { displayHeaders, displayTeams, displayScores };
