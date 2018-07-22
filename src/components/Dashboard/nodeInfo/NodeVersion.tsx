
import * as React from 'react';

import AsyncContent from 'src/components/common/AsyncContent';
import { INodeInformation } from 'src/STSO/KongAdminApi';

export default (props: { node: INodeInformation | null }) =>
    <AsyncContent content={props.node && props.node.version} />
