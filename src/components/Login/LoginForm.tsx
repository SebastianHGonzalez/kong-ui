import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import { FormControl, Input, InputLabel } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import * as loginActionCreators from 'src/actions/LoginActionCreators';
import { PATH } from 'src/Routes';

import Login from 'src/STSO/Login';


type T = any

interface ILoginFormState {
    kongUrl: string;
    redirect?: JSX.Element;
}

class LoginForm extends React.Component<T, ILoginFormState> {

    constructor(props: React.Props<T>) {
        super(props);

        this.state = {
            kongUrl: "",
        }

        this.setKongUrl = this.setKongUrl.bind(this);
        this.login = this.login.bind(this);
    }

    public setKongUrl(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void {
        const kongUrl = event.target.value
        this.setState({ kongUrl });
    }

    public login(event: any) {
        event.preventDefault();
        event.stopPropagation();

        const login = new Login(this.state.kongUrl);

        this.props.setLogin(login);
        
        this.setState({ redirect: <Redirect to={PATH.ROOT} /> });
    }

    public render() {
        return (
            <form onSubmit={this.login}>
                <FormControl>
                    {this.state.redirect}
                    <InputLabel>Kong Url</InputLabel>
                    <Input onChange={this.setKongUrl} />
                    <Button size="large" color="primary" type="submit">Connect</Button>
                </FormControl>
            </form>
        );
    }
}

export default connect(null, loginActionCreators)(LoginForm);
