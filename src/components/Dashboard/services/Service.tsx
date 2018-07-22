import { ListItem, ListItemText } from '@material-ui/core';
import * as React from 'react';

import { IService } from 'src/STSO/KongAdminApi';


interface IServiceProps extends React.Props<any> {
    service: IService;
}

export default ({service}: IServiceProps) =>
    <ListItem>
        <ListItemText primary={service.id} />
        <ListItemText primary={service.name} />
    </ListItem>