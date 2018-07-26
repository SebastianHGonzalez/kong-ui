import InitialState from "src/store/InitialState";

import { IRouteAction } from "src/actions/RouteActionCreators";
import RouteActionTypes from "src/actions/RouteActionTypes";
import { IRoute } from "src/STSO/api/Route";


export interface IRouteState {
    loading: boolean;
    data: IRoute[];
}

export default (state: IRouteState = InitialState.routes, action: IRouteAction): IRouteState => {

    switch (action.type) {
        case RouteActionTypes.START_LOADING: return { data: state.data, loading: true }
        case RouteActionTypes.STOP_LOADING: return { data: state.data, loading: false }
        case RouteActionTypes.SET_ROUTES: return { loading: false, data: [...action.routes] };
        default: return state;
    }
}
