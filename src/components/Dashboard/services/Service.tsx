import { Button, ListItem, ListItemText } from '@material-ui/core';
import * as React from 'react';

import { IService } from 'src/STSO/KongAdminApi';
import Locale from 'src/STSO/locale/Locale';

interface IServiceProps extends React.Props<any> {
    service: IService;
    locale: Locale;
    deleteService: () => void;
}

export default ({service, locale, deleteService}: IServiceProps) =>
    <ListItem>
        <ListItemText primary={service.id} />
        <ListItemText primary={service.name} />
        <Button color='secondary' onClick={deleteService}>{locale.delete} {locale.service}</Button>
    </ListItem>
    