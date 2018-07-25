import * as React from 'react';

import AsyncContent from 'src/components/common/AsyncContent';
import { INodeInformationState } from 'src/reducers/NodeInformationReducer';


interface INodeTagLineProps extends React.Props<any> {
    node: INodeInformationState;
}

export default (props: INodeTagLineProps) =>
    <AsyncContent content={props.node.loading ? null : props.node.data && props.node.data.tagline} />
