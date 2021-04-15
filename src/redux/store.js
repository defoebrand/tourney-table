import { combineReducers, createStore } from 'redux';

import { GET } from './actions';

const initialState = '';

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

const getTeamsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET:
      return {
        teams: JSON.parse(localStorage.teamList),
      };
    default:
      return state;
  }
};

export const combinedReducers = combineReducers({
  getTeamsReducer,
});

export default createStore(combinedReducers);
