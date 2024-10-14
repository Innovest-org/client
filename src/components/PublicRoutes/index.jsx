import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

const PublicRoute = ({ children }) => {
  const { user } = useContext(AppContext);

  if (user) {
    if (user.role === 'ADMIN' || 'SUPER_ADMIN') {
      return <Navigate to="/admin-dashboard" />;
    } else if (user.role === 'INVESTOR') {
      return <Navigate to="/investor-dashboard" />;
    } else {
      return <Navigate to="/login" />;
    }
  } 

  return children;
};


export default PublicRoute;
