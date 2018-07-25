import * as React from 'react';

import AsyncContent from 'src/components/common/AsyncContent';
import { INodeInformationState } from 'src/reducers/NodeInformationReducer';


interface INodeHostNameProps extends React.Props<any> {
    node: INodeInformationState;
}

export default (props: INodeHostNameProps) =>
    <AsyncContent content={props.node.loading ? null : props.node.data && props.node.data.hostname} />
