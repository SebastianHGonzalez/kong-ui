import { combineReducers } from 'redux';
import login from '../reducers/LoginReducer';

const RootReducer = combineReducers({

    login,
});

export default RootReducer;