import { Action, Dispatch } from "redux";

import ServiceActionTypes from "src/actions/ServiceActionTypes";
import { IService, IServiceOptions } from "src/STSO/KongAdminApi";


export type ServiceActionCreator = (services: IService[]) => IServiceAction;

export interface IServiceAction extends Action {
    services: IService[];
}

export const setServices: ServiceActionCreator = (services: IService[] = []): IServiceAction =>
    ({
        services,
        type: ServiceActionTypes.SET_SERVICES,
    });

export const fetchServices = () => (dispatch: Dispatch, getState: any) => {
    getState()
        .login
        .api
        .services()
        .then((services: IService[]) =>
            dispatch(setServices(services))
        );
}

export const createService = (serviceOptions: IServiceOptions) => (dispatch: Dispatch, getState: any) => {
    getState()
        .login
        .api
        .addService(serviceOptions)
        .then(() => dispatch((fetchServices() as any)));
}