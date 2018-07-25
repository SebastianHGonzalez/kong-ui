import * as React from 'react';

import AsyncContent from 'src/components/common/AsyncContent';
import { INodeInformationState } from 'src/reducers/NodeInformationReducer';


interface INodeIdProps extends React.Props<any> {
    node: INodeInformationState;
}

export default (props: INodeIdProps) =>
    <AsyncContent content={props.node.loading ? null : props.node.data && props.node.data.node_id} />
