export const GETTEAMS = 'GETTEAMS';
export const GETGAMES = 'GETGAMES';
export const GETHEADERS = 'GETHEADERS';
export const GETROSTER = 'GETROSTER';

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

export const getRoster = (input) => ({
  type: GETROSTER,
  input,
});
