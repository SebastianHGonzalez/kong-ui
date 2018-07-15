import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import { ILoginData } from 'src/reducers/LoginReducer';
import { IStoreState } from 'src/store/InitialState';


interface ILandingProps extends React.Props<any> {
    login: ILoginData;
}

const Landing = (props: ILandingProps) =>
(
    <Redirect to={props.login ? "/dashboard" : "/login"} />
);

const mapStateToProps = (state: IStoreState) => (
    {
        login: state.login
    }
);

export default connect(mapStateToProps)(Landing);