import * as React from 'react';

import { Card, CardContent, CardHeader } from '@material-ui/core';

import NodeHostName from 'src/components/Dashboard/nodeInfo/NodeHostName';
import NodeTagLine from 'src/components/Dashboard/nodeInfo/NodeTagLine';
import NodeVersion from 'src/components/Dashboard/nodeInfo/NodeVersion';
import { ILoginData } from 'src/reducers/LoginReducer';
import { INodeInformation, INodeStatus } from 'src/STSO/KongAdminApi';
import NodeId from './nodeInfo/NodeId';


interface IKongServerStatusProps extends React.Props<any> {
    login: ILoginData
}

interface IKongServerStatusState {
    nodeInfo: INodeInformation | null;
    nodeStatus: INodeStatus | null;
}

class KongServerStatus extends React.Component<IKongServerStatusProps, IKongServerStatusState> {

    constructor(props: IKongServerStatusProps) {
        super(props);

        this.state = {
            nodeInfo: null,
            nodeStatus: null,
        };

        this.setNodeInfo = this.setNodeInfo.bind(this);
        this.setNodeStatus = this.setNodeStatus.bind(this);
    }

    public setNodeInfo(nodeInfo: INodeInformation) {
        this.setState({ nodeInfo })
    }

    public setNodeStatus(nodeStatus: INodeStatus) {
        this.setState({ nodeStatus })
    }

    public componentDidMount() {
        this.props.login.api
            .nodeInformation()
            .then(this.setNodeInfo);

        this.props.login.api
            .nodeStatus()
            .then(this.setNodeStatus);
    }

    public render() {
        return (
            <Card>
                <CardHeader title="Server Status" />
                <CardContent>
                    <NodeHostName node={this.state.nodeInfo} /><br/>
                    <NodeTagLine node={this.state.nodeInfo} /><br/>
                    Node id: <NodeId node={this.state.nodeInfo} /><br/>
                    Node Version: <NodeVersion node={this.state.nodeInfo} /><br/>
                </CardContent>
            </Card>
        );
    }
}

export default KongServerStatus;
