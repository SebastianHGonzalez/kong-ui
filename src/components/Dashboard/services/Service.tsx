import * as React from 'react';

import { IService } from '../../../STSO/KongAdminApi';


interface IServiceProps extends React.Props<any> {
    service: IService;
}

export default ({service}: IServiceProps) =>
    <div>
        {service.id}
        {service.name}
    </div>