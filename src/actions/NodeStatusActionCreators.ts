import { Action, Dispatch } from "redux";

import NodeStatusActionTypes from "src/actions/NodeStatusActionTypes";
import { IStoreState } from "src/store/InitialState";
import { INodeStatus } from "src/STSO/KongAdminApi";

export type NodeStatusActionCreator = (login: INodeStatus) => INodeStatusAction;

export interface INodeStatusAction extends Action {
    status: INodeStatus;
}

export const setStatus: NodeStatusActionCreator = (status: INodeStatus): INodeStatusAction =>
    ({
        status,
        type: NodeStatusActionTypes.SET_STATUS,
    });

export const fetchNodeStatus = () => (dispatch: Dispatch, getState: () => IStoreState) => {
    getState()
        .login
        .api
        .nodeStatus()
        .then((status: INodeStatus) =>
            dispatch(setStatus(status))
        )
}
