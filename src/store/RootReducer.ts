import { combineReducers } from 'redux';
import LoginReducer from 'src/reducers/LoginReducer';

const RootReducer = combineReducers({

    LoginReducer,
});

export default RootReducer;