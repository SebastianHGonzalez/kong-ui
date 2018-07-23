import { combineReducers } from 'redux';
import locale from '../reducers/LocaleReducer';
import login from '../reducers/LoginReducer';
import services from '../reducers/ServiceReducer';

const RootReducer = combineReducers({

    locale,
    login,
    services,
});

export default RootReducer;