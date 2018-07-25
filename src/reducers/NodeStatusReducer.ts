import { INodeStatusAction } from "src/actions/NodeStatusActionCreators";
import NodeStatusActionTypes from "src/actions/NodeStatusActionTypes";
import InitialState from "src/store/InitialState";
import { INodeStatus } from "src/STSO/KongAdminApi";


export interface INodeStatusState {
    loading: boolean;
    data?: INodeStatus;
}

export default (state: INodeStatusState = InitialState.nodeStatus, action: INodeStatusAction): INodeStatusState => {
    switch (action.type) {
        case (NodeStatusActionTypes.SET_STATUS): return { loading: false, data: action.status };
        default: return state;
    }
}