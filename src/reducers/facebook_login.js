import { FB_LOGIN_SUCCESS } from '../actions';

const INITIAL_STATE = { };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FB_LOGIN_SUCCESS:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};
