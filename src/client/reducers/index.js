import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import adminsReducer from './adminsReducer';

export default combineReducers({
  admins: adminsReducer,
  auth: authReducer,
  users: usersReducer
});
