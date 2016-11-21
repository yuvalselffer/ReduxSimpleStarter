import { combineReducers } from 'redux';
import { reducer as burgerMenu } from 'redux-burger-menu';
import facebookLoginReducer from './facebook_login';

const rootReducer = combineReducers({
  burgerMenu,
  facebookUser: facebookLoginReducer
});

export default rootReducer;
