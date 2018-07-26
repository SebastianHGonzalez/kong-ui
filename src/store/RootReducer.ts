import { combineReducers } from 'redux';
import locale from '../reducers/LocaleReducer';
import login from '../reducers/LoginReducer';
import nodeInformation from '../reducers/NodeInformationReducer';
import nodeStatus from '../reducers/NodeStatusReducer';
import routes from '../reducers/RouteReducer';
import services from '../reducers/ServiceReducer';

const RootReducer = combineReducers({

    locale,
    login,
    nodeInformation,
    nodeStatus,
    routes,
    services,
});

export default RootReducer;