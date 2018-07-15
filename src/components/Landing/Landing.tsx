import * as React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';


interface ILandingProps extends React.Props<any> {
    login: any
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