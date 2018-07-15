import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import KongServerStatus from 'src/components/Dashboard/KongServerStatus';
import { ILoginData } from 'src/reducers/LoginReducer';
import { PATH } from 'src/Routes';
import { IStoreState } from 'src/store/InitialState';


type T = any;

interface IDashBoardProps extends React.Props<T> {
    login: ILoginData;
}

const renderDashboard = ({ login }: IDashBoardProps) => (
    <div>
        <KongServerStatus login={login}/>
    </div>
);

const Dashboard = (props: IDashBoardProps) => props.login ? renderDashboard(props) : <Redirect to={PATH.LOGIN} />

const mapStateToProps = (store: IStoreState) => (
    {
        login: store.login,
    }
);

export default connect(mapStateToProps)(Dashboard);