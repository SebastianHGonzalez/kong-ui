import { ListItem, ListItemText } from '@material-ui/core';
import * as React from 'react';

import { IService } from 'src/STSO/api/Service';
import ServiceDeleteButton from './ServiceDeleteButton';
import ServiceEditButton from './ServiceEditButton';

interface IServiceProps extends React.Props<any> {
    service: IService;
}

export default ({ service }: IServiceProps) =>
    <ListItem>
        <ListItemText primary={service.id} />
        <ListItemText primary={service.name} />
        <ServiceEditButton service={service} />
        <ServiceDeleteButton service={service}/>
    </ListItem>
