import { combineReducers, createStore } from 'redux';

import { SUBMIT, GET } from './actions';

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
localStorage.teamList = JSON.stringify(initialTable);

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

const addTeamReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT:
      if (JSON.parse(localStorage.teamList)[0].Team === '') {
        console.log('yay');
      }
      return {
        team: action.input,
      };
    default:
      return state;
  }
};

export const combinedReducers = combineReducers({
  getTeamsReducer,
  addTeamReducer,
});

export default createStore(combinedReducers);
