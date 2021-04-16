import { combineReducers, createStore } from 'redux';

import { GETTEAMS, GETGAMES } from './actions';

if (localStorage.teamList === undefined) {
  localStorage.teamList = JSON.stringify([{
    Place: '',
    Team: '',
    Played: '',
    Win: '',
    Draw: '',
    Loss: '',
    Points: '',
  }]);
}

if (localStorage.games === undefined) {
  localStorage.games = JSON.stringify([]);
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
