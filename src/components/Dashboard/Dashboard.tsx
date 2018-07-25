import * as queryString from 'query-string';
import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect, RouteComponentProps, withRouter } from 'react-router';

import * as loginActionCreators from 'src/actions/LoginActionCreators';
import KongServerServices from 'src/components/Dashboard/KongServerServices';
import KongServerStatus from 'src/components/Dashboard/KongServerStatus';
import { ILoginData } from 'src/reducers/LoginReducer';
import { PATH } from 'src/Routes';
import { IStoreState } from 'src/store/InitialState';
import Login from 'src/STSO/Login';


interface IDashBoardProps extends RouteComponentProps<any> {
    login: ILoginData;
    setLogin: (login: ILoginData) => any;
}

const renderDashboard = ({ login }: IDashBoardProps) => (
    <div>
        <KongServerStatus />
        <KongServerServices />
    </div>
);

const Dashboard = (props: IDashBoardProps) => {
    const login = loginFromProps(props);
    return login ? renderDashboard({ ...props, login }) : <Redirect to={PATH.LOGIN} />
}

function loginFromProps(props: IDashBoardProps): ILoginData | null {
    if (props.login) {
        return props.login
    } else {
        return loginFromQueryString(props);
    }
}

function loginFromQueryString(props: IDashBoardProps): ILoginData | null {
    const url = queryString.parse(props.location.search).kong;
    if (url) {
        const login = new Login(url);
        props.setLogin(login);
        return login;
    } else {
        return null;
    }
}

const mapStateToProps = (store: IStoreState) => (
    {
        login: store.login,
    }
);

export default connect(mapStateToProps, loginActionCreators)(withRouter(Dashboard));
