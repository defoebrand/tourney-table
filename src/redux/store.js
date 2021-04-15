import { combineReducers, createStore } from 'redux';

import { GETTEAMS, GETGAMES } from './actions';

import { createTournament } from '../helpers/gameHelpers';

const initialTable = [{
  Place: '',
  Team: '',
  Played: '',
  Win: '',
  Draw: '',
  Loss: '',
  Points: '',
}];

if (localStorage.teamList === undefined) {
  localStorage.teamList = JSON.stringify(initialTable);
}

if (localStorage.games === undefined) {
  console.log('in if statement');
  localStorage.games = JSON.stringify(createTournament(JSON.parse(localStorage.teamList)));
}

const getTeamsReducer = (state = '', action) => {
  switch (action.type) {
    case GETTEAMS:
      return {
        teamList: JSON.parse(localStorage.teamList),
      };
    default:
      return state;
  }
};

const getGamesReducer = (state = '', action) => {
  console.log('in reducer');
  switch (action.type) {
    case GETGAMES:
      return {
        games: JSON.parse(localStorage.games),
      };
    default:
      return state;
  }
};

export const combinedReducers = combineReducers({
  getTeamsReducer,
  getGamesReducer,
});

export default createStore(combinedReducers);
