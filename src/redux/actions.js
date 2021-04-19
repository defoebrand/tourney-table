export const GETTEAMS = 'GETTEAMS';
export const GETGAMES = 'GETGAMES';
export const GETHEADERS = 'GETHEADERS';

export const getTeams = (input) => ({
  type: GETTEAMS,
  input,
});

export const getGames = (input) => ({
  type: GETGAMES,
  input,
});

export const getHeaders = (input) => ({
  type: GETHEADERS,
  input,
});
