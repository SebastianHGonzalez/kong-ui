import * as queryString from 'query-string';
import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect, RouteComponentProps, withRouter } from 'react-router';

import * as loginActionCreators from 'src/actions/LoginActionCreators';
import KongServerStatus from 'src/components/Dashboard/KongServerStatus';
import { ILoginData } from 'src/reducers/LoginReducer';
import { PATH } from 'src/Routes';
import { IStoreState } from 'src/store/InitialState';
import Login from 'src/STSO/Login';


interface IDashBoardProps extends RouteComponentProps<any> {
    login: ILoginData;
}

const renderDashboard = ({ login }: IDashBoardProps) => (
    <div>
        <KongServerStatus login={login} />
    </div>
);

const Dashboard = (props: IDashBoardProps) => {
    const login: ILoginData = loginFromProps(props);
    return login ? renderDashboard({ ...props, login }) : <Redirect to={PATH.LOGIN} />
}

function loginFromProps(props: IDashBoardProps): ILoginData {
    if (props.login) {
        return props.login
    } else {
        const login = new Login(queryString.parse(props.location.search).kong);
        (props as any).setLogin(login);
        return login;
    }
}

const mapStateToProps = (store: IStoreState) => (
    {
        login: store.login,
    }
);

export default connect(mapStateToProps, loginActionCreators)(withRouter(Dashboard));
