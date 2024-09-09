import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AppContext);

  if (!user) {
    console.log('PRIVATE_ROUTE', { user });
    return <Navigate to='/login' />;
  }

  return children;
};

export default PrivateRoute;
