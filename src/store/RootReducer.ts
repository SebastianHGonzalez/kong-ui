import { combineReducers } from 'redux';
import locale from '../reducers/LocaleReducer';
import login from '../reducers/LoginReducer';

const RootReducer = combineReducers({

    locale,
    login,
});

export default RootReducer;