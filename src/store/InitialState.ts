import { INodeInformationState } from "src/reducers/NodeInformationReducer";
import { INodeStatusState } from "src/reducers/NodeStatusReducer";
import { IRouteState } from "src/reducers/RouteReducer";
import { IServiceState } from "src/reducers/ServiceReducer";
import ILocale, { Locale } from "src/STSO/locale/Locale";


export interface IStoreState {
    locale: ILocale;
    login: any;
    services: IServiceState;
    nodeInformation: INodeInformationState;
    nodeStatus: INodeStatusState;
    routes: IRouteState;
}

const InitialState: IStoreState = {
    locale: Locale('en'),
    login: null,
    nodeInformation: {
        loading: true,
    },
    nodeStatus: {
        loading: true,
    },
    routes: {
        data: [],
        loading: true,
    },
    services: {
        data: [],
        loading: true,
    },
};

export default InitialState;
