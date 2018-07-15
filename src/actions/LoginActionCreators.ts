import { Action } from "redux";

import { ILoginData } from "../reducers/LoginReducer";
import LoginActionTypes from "./LoginActionTypes";


export type LoginActionCreator = (login: ILoginData) => ILoginAction;

export interface ILoginAction extends Action {
    login: ILoginData;
}

export const setLogin: LoginActionCreator = (login: ILoginData): ILoginAction =>
    ({
        login,
        type: LoginActionTypes.SET_LOGIN,
    });
