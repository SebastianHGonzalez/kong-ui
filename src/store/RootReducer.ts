import { combineReducers } from 'redux';
import locale from '../reducers/LocaleReducer';
import login from '../reducers/LoginReducer';
import nodeInformation from '../reducers/NodeInformationReducer';
import nodeStatus from '../reducers/NodeStatusReducer';
import services from '../reducers/ServiceReducer';

const RootReducer = combineReducers({

    locale,
    login,
    nodeInformation,
    nodeStatus,
    services,
});

export default RootReducer;