export const SUBMIT = 'SUBMIT';
export const GET = 'GET';

export const addTeam = (input) => ({
  type: SUBMIT,
  input,
});

export const getTeams = (input) => ({
  type: GET,
  input,
});
