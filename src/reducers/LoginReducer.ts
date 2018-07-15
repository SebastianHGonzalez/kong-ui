import { Action } from "redux";

import InitialState from "src/store/InitialState";


export interface ILoginData {
    kongUrl: string
}

export default (state: ILoginData = InitialState.login, action: Action): ILoginData => {
    
    switch(action.type){
        default: return state;
    }
}
