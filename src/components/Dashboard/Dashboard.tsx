import * as React from 'react';
import { connect } from 'react-redux';

import { ILoginData } from 'src/reducers/LoginReducer';
import { IStoreState } from 'src/store/InitialState';


type T = any;

interface IDashBoardProps extends React.Props<T> {
    login: ILoginData;
}

const Dashboard = ({ login }: IDashBoardProps) => (
    <div>
        {login.kongUrl}
    </div>
);

const mapStateToProps = (store: IStoreState) => (
    {
        login: store.login,
    }
);

export default connect(mapStateToProps)(Dashboard);