import { Action, Dispatch } from "redux";

import NodeInformationActionTypes from "src/actions/NodeInformationActionTypes";
import { INodeInformation } from "src/STSO/KongAdminApi";
import { IStoreState } from "../store/InitialState";

export type NodeInformationActionCreator = (login: INodeInformation) => INodeInformationAction;

export interface INodeInformationAction extends Action {
    information: INodeInformation;
}

export const setInformation: NodeInformationActionCreator = (information: INodeInformation): INodeInformationAction =>
    ({
        information,
        type: NodeInformationActionTypes.SET_INFORMATION,
    });

export const fetchNodeInformation = () => (dispatch: Dispatch, getState: () => IStoreState) => {
    getState()
        .login
        .api
        .nodeInformation()
        .then((information: INodeInformation) =>
            dispatch(setInformation(information))
        )
}
