import { combineReducers } from 'redux';
import blog from './blog';
import auth from './auth';

export default combineReducers({ blog, auth });
