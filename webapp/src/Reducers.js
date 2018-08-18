import { combineReducers } from 'redux';
import homeReducer from './features/Home/HomeReducer';
import loginReducer from './features/Login/LoginReducer';
import notificationsReducer from './features/notifications/notificationsReducer';
import dietReducer from './features/Diet/DietReducer';

export default combineReducers({
  startState: homeReducer,
  authState: loginReducer,
  notificationsState: notificationsReducer,
  dietState: dietReducer
});