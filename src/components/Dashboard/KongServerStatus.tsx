import * as React from 'react';
import { connect } from 'react-redux';

import { Card, CardContent, CardHeader } from '@material-ui/core';

import NodeHostName from 'src/components/Dashboard/nodeInfo/NodeHostName';
import NodeId from 'src/components/Dashboard/nodeInfo/NodeId';
import NodeTagLine from 'src/components/Dashboard/nodeInfo/NodeTagLine';
import NodeVersion from 'src/components/Dashboard/nodeInfo/NodeVersion';
import { ILoginData } from 'src/reducers/LoginReducer';
import { INodeInformationState } from 'src/reducers/NodeInformationReducer';
import { INodeStatusState } from 'src/reducers/NodeStatusReducer';
import { IStoreState } from 'src/store/InitialState';

import { fetchNodeInformation } from 'src/actions/NodeInformationActionCreators';
import { fetchNodeStatus } from 'src/actions/NodeStatusActionCreators';



interface IKongServerStatusProps extends React.Props<any> {
    login: ILoginData
    nodeInformation: INodeInformationState;
    nodeStatus: INodeStatusState;
    fetchNodeInformation: () => any;
    fetchNodeStatus: () => any;
}

class KongServerStatus extends React.Component<IKongServerStatusProps> {

    public componentDidMount() {
        this.props.fetchNodeInformation();
        this.props.fetchNodeStatus();
    }

    public render() {
        return (
            <Card>
                <CardHeader title="Server Status" />
                <CardContent>
                    <NodeHostName node={this.props.nodeInformation} /><br />
                    <NodeTagLine node={this.props.nodeInformation} /><br />
                    Node id: <NodeId node={this.props.nodeInformation} /><br />
                    Node Version: <NodeVersion node={this.props.nodeInformation} /><br />
                </CardContent>
            </Card>
        );
    }
}

function mapStateToProps({ nodeInformation, nodeStatus }: IStoreState) {
    return {
        nodeInformation,
        nodeStatus,
    }
}

const mapDispatchToProps = {
    fetchNodeInformation,
    fetchNodeStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(KongServerStatus);
