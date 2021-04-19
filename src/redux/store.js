import { combineReducers, createStore } from 'redux';

import {
  GETTEAMS, GETGAMES, GETHEADERS, GETROSTER,
} from './actions';

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

if (localStorage.headers === undefined) {
  localStorage.headers = JSON.stringify(['Place', 'Team', 'Played', 'Win', 'Draw', 'Loss', 'Points']);
}

if (localStorage.games === undefined) {
  localStorage.games = JSON.stringify([]);
}

if (localStorage.roster === undefined) {
  localStorage.roster = JSON.stringify([]);
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

const getHeadersReducer = (state = '', action) => {
  switch (action.type) {
    case GETHEADERS:
      return {
        headers: JSON.parse(localStorage.headers),
      };
    default:
      return state;
  }
};

const getRosterReducer = (state = '', action) => {
  switch (action.type) {
    case GETROSTER:
      return {
        roster: JSON.parse(localStorage.roster),
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
  getHeadersReducer,
  getRosterReducer,
});

export default createStore(combinedReducers);
