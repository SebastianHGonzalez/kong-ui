import * as React from 'react';

import { Card, CardContent, CardHeader, LinearProgress, TableRow } from '@material-ui/core';

import { ILoginData } from 'src/reducers/LoginReducer';
import { INodeInformation, INodeStatus } from 'src/STSO/KongAdminApi';


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
    }

    public componentDidMount() {
        this.props.login.api
            .nodeInformation()
            .then((nodeInfo: INodeInformation) => this.setState({ nodeInfo }));

        this.props.login.api
            .nodeStatus()
            .then((nodeStatus: INodeStatus) => this.setState({ nodeStatus }));
    }

    public render() {
        return (
            <Card>
                <CardHeader title="Server Status" />
                <CardContent>
                    <TableRow>
                    Node Id: {(this.state.nodeInfo && this.state.nodeInfo.node_id) || <LinearProgress />}
                    </TableRow>
                </CardContent>
            </Card>
        );
    }
}

export default KongServerStatus;
