import { combineReducers } from 'redux';

//reducers
import data from './initialReducer';
import selectUser from './selectUserReducer';

export default combineReducers({
    data,
    selectUser,
})