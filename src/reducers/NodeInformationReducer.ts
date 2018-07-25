import { INodeInformationAction } from "src/actions/NodeInformationActionCreators";
import NodeInformationActionTypes from "src/actions/NodeInformationActionTypes";
import InitialState from "src/store/InitialState";
import { INodeInformation } from "src/STSO/KongAdminApi";

export interface INodeInformationState {
    loading: boolean;
    data?: INodeInformation;
}

export default (state: INodeInformationState = InitialState.nodeInformation, action: INodeInformationAction): INodeInformationState => {
    switch (action.type) {
        case (NodeInformationActionTypes.SET_INFORMATION): return { loading: false, data: action.information };
        default: return state;
    }
}