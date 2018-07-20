import * as React from 'react';

import { Card, CardContent, CardHeader, TableRow } from '@material-ui/core';

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

    public setNodeInfo(nodeInfo: INodeInformation){
        this.setState({ nodeInfo })
    }

    public setNodeStatus(nodeStatus: INodeStatus){
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
                    <TableRow>
                        Node id: <NodeId node={this.state.nodeInfo}/>
                    </TableRow>
                    <TableRow>
                        Node :
                    </TableRow>
                </CardContent>
            </Card>
        );
    }
}

export default KongServerStatus;
