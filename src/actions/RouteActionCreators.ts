import { Action, Dispatch } from "redux";

import RouteActionTypes from "src/actions/RouteActionTypes";
import { IRoute, IRouteOptions } from "src/STSO/api/Route";
import { IStoreState } from "../store/InitialState";


export type RouteActionCreator = (routes: IRoute[]) => IRouteAction;

export interface IRouteAction extends Action {
    routes: IRoute[];
}

export const startLoading = () => 
({
    type: RouteActionTypes.START_LOADING,
})

export const stopLoading = () => 
({
    type: RouteActionTypes.STOP_LOADING,
})

export const setRoutes: RouteActionCreator = (routes: IRoute[] = []): IRouteAction =>
    ({
        routes,
        type: RouteActionTypes.SET_ROUTES,
    });

export const fetchRoutes = () => (dispatch: Dispatch, getState: any) => {
    dispatch(startLoading());
    getState()
        .login
        .api
        .routes()
        .then((routes: IRoute[]) =>
            dispatch(setRoutes(routes))
        );
}

export const createRoute = (routeOptions: IRouteOptions) => (dispatch: Dispatch, getState: any) => {
    dispatch(startLoading());
    getState()
        .login
        .api
        .addRoute(routeOptions)
        .then(() =>
            dispatch(fetchRoutes() as any));
}

export const deleteRoute = (routeId: string) => (dispatch: Dispatch, getState: any) => {
    dispatch(startLoading());
    getState()
        .login
        .api
        .deleteRoute(routeId)
        .then(() =>
            dispatch(fetchRoutes() as any));
}

export const updateRoute = (options: IRouteOptions) => (dispatch: Dispatch, getState: () => IStoreState) => {
    dispatch(startLoading());
    getState()
        .login
        .api
        .updateRoute(options)
        .then(() =>
            dispatch(fetchRoutes() as any));
}