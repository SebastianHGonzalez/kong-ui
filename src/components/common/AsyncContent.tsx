import { LinearProgress } from '@material-ui/core';
import * as React from 'react';

export default (props: { content: any | null }) =>
    props.content || <LinearProgress />
