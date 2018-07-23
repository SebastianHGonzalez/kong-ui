import InitialState from "src/store/InitialState";

import { IServiceAction } from "src/actions/ServiceActionCreators";
import ServiceActionTypes from "src/actions/ServiceActionTypes";
import { IService } from "src/STSO/KongAdminApi";


export default (state: IService[] = InitialState.services, action: IServiceAction): IService[] => {

    switch (action.type) {
        case ServiceActionTypes.SET_SERVICES: return action.services;
        default: return state;
    }
}
