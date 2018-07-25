import { Button } from '@material-ui/core';
import * as React from 'react';
import { connect } from 'react-redux';

import { deleteService } from 'src/actions/ServiceActionCreators';
import { IStoreState } from 'src/store/InitialState';
import { IService } from 'src/STSO/api/Service';
import Locale from 'src/STSO/locale/Locale';

interface IServiceDeleteButtonProps extends React.Props<any> {
    service: IService;
    locale: Locale;
    deleteThisService: (id: string) => (event: any) => any;
}

export class ServiceDeleteButton extends React.Component<IServiceDeleteButtonProps> {
    public render() {
        return (
            <Button color='secondary'
                onClick={
                    this.props.deleteThisService(this.props.service.id)
                }>
                {this.props.locale.delete} {this.props.locale.service}
            </Button>
        );
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        deleteThisService: (id: string) => (event: any) => {
            event.stopPropagation();
            dispatch(deleteService(id))
        },
    };
}

function mapStateToProps({ locale }: IStoreState) {
    return {
        locale,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceDeleteButton);
