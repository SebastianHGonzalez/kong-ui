import { ILoginAction } from "src/actions/LoginActionCreators";
import LoginActionTypes from "src/actions/LoginActionTypes";
import InitialState from "src/store/InitialState";
import { IKongAdminApi } from "src/STSO/KongAdminApi";


export interface ILoginData {
    kongUrl: string;
    api: IKongAdminApi;
}

export default (state: ILoginData = InitialState.login, action: ILoginAction): ILoginData => {
    
    switch(action.type){
        case LoginActionTypes.SET_LOGIN: return action.login;
        default: return state;
    }
}
