export const GETTEAMS = 'GETTEAMS';
export const GETGAMES = 'GETGAMES';

export const getTeams = (input) => ({
  type: GETTEAMS,
  input,
});

export const getGames = (input) => ({
  type: GETGAMES,
  input,
});
