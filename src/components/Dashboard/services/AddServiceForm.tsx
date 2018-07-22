import { Button, FormControl, FormHelperText, Input, InputLabel } from '@material-ui/core';
import * as React from 'react';

import { IServiceOptions } from 'src/STSO/KongAdminApi';
import Locale from 'src/STSO/locale/Locale';


interface IAddServiceFormProps extends React.Props<any> {
    locale: Locale;
    onSubmit: (form: IServiceOptions) => void;
    onCancel: () => void;
}

export interface IAddServiceFormState {
    name: string;
    host: string;
}

export default class AddServiceForm extends React.Component<IAddServiceFormProps, IAddServiceFormState> {

    constructor(props: IAddServiceFormProps) {
        super(props);

        this.state = {
            host: "",
            name: "",
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleHostChange = this.handleHostChange.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    public handleSubmit(event: React.FormEvent<any>) {
        event.preventDefault();
        event.stopPropagation();
        this.props.onSubmit(this.state);
    }

    public handleCancel(event: any) {
        event.stopPropagation();
        this.props.onCancel();
    }

    public handleNameChange(event: any) {
        this.setState({
            name: event.target.value,
        })
    }

    public handleHostChange(event: any) {
        this.setState({
            host: event.target.value,
        });
    }

    public render() {
        const locale = this.props.locale;
        return (
            <form onSubmit={this.handleSubmit}>
                <FormControl>
                    <Input onChange={this.handleNameChange} />
                    <InputLabel>{locale.name} ({locale.optional})</InputLabel>
                    <br />
                    <Input onChange={this.handleHostChange} />
                    <InputLabel >{locale.host}</InputLabel>
                    <FormHelperText>{locale.hostDescription}</FormHelperText>

                    <Button color='primary' type='submit'>
                        {locale.add}
                    </Button>
                    <Button color='secondary' type='reset' onClick={this.handleCancel}>
                        {locale.cancel}
                    </Button>
                </FormControl>
            </form>
        );
    }
}