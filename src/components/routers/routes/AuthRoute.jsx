import React,{useContext} from 'react';
import { Navigate } from 'react-router-dom';
import { Context } from '../../context/Store';

const AuthRoute = ({children}) => {
    const {state:{userData:{isVerified}}} = useContext(Context);
    return !isVerified ? children : <Navigate to='/' />;
};

export default AuthRoute;