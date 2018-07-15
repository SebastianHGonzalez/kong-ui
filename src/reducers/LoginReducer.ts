import { ILoginAction } from "../actions/LoginActionCreators";
import LoginActionTypes from "../actions/LoginActionTypes";
import InitialState from "../store/InitialState";


export interface ILoginData {
    kongUrl: string
}

export default (state: ILoginData = InitialState.login, action: ILoginAction): ILoginData => {
    
    switch(action.type){
        case LoginActionTypes.SET_LOGIN: return action.login;
        default: return state;
    }
}
