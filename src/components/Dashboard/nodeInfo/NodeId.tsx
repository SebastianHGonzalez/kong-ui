import { LinearProgress } from '@material-ui/core';
import * as React from 'react';

import { INodeInformation } from 'src/STSO/KongAdminApi';

export default (props: {node: INodeInformation | null}) => (
    <span>{(props.node && props.node.node_id) || <LinearProgress />}</span>
)                    