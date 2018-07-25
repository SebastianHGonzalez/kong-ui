import InitialState from "src/store/InitialState";

import { IServiceAction } from "src/actions/ServiceActionCreators";
import ServiceActionTypes from "src/actions/ServiceActionTypes";
import { IService } from "src/STSO/KongAdminApi";


export interface IServiceState {
    loading: boolean;
    data: IService[];
}

export default (state: IServiceState = InitialState.services, action: IServiceAction): IServiceState => {

    switch (action.type) {
        case ServiceActionTypes.SET_SERVICES: return { loading: false, data: [...action.services] };
        default: return state;
    }
}
