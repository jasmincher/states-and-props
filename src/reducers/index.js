import { combineReducers } from 'redux';
import  { nameReducer } from './nameReducers';


export default combineReducers({name: nameReducer});