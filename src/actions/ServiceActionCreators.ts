import { Action, Dispatch } from "redux";

import ServiceActionTypes from "src/actions/ServiceActionTypes";
import { IService, IServiceOptions } from "src/STSO/api/Service";
import { IStoreState } from "../store/InitialState";


export type ServiceActionCreator = (services: IService[]) => IServiceAction;

export interface IServiceAction extends Action {
    services: IService[];
}

export const startLoading = () => 
({
    type: ServiceActionTypes.START_LOADING,
})

export const stopLoading = () => 
({
    type: ServiceActionTypes.STOP_LOADING,
})

export const setServices: ServiceActionCreator = (services: IService[] = []): IServiceAction =>
    ({
        services,
        type: ServiceActionTypes.SET_SERVICES,
    });

export const fetchServices = () => (dispatch: Dispatch, getState: any) => {
    dispatch(startLoading());
    getState()
        .login
        .api
        .services()
        .then((services: IService[]) =>
            dispatch(setServices(services))
        );
}

export const createService = (serviceOptions: IServiceOptions) => (dispatch: Dispatch, getState: any) => {
    dispatch(startLoading());
    getState()
        .login
        .api
        .addService(serviceOptions)
        .then(() =>
            dispatch(fetchServices() as any));
}

export const deleteService = (serviceId: string) => (dispatch: Dispatch, getState: any) => {
    dispatch(startLoading());
    getState()
        .login
        .api
        .deleteService(serviceId)
        .then(() =>
            dispatch(fetchServices() as any));
}

export const updateService = (options: IServiceOptions) => (dispatch: Dispatch, getState: () => IStoreState) => {
    dispatch(startLoading());
    getState()
        .login
        .api
        .updateService(options)
        .then(() =>
            dispatch(fetchServices() as any));
}