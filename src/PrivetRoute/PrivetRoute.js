import React from 'react';
import { Navigate } from 'react-router-dom';
import { Route } from 'react-router-dom';
import LoadingScreen from '../components/LoadingScreen/LoadingScreen';
import useAuth from '../Hooks/useAuth';

const PrivetRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    //this is used for solve reload to redirect login issue
    if (isLoading) {
        return (<LoadingScreen></LoadingScreen>);
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Navigate
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivetRoute;

/* if (!isLoading) {
    return (<LoadingScreen></LoadingScreen>);
} */