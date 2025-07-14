import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function PrivateRouter({ children }) {
    const userContext=useContext(AuthContext)
  const userExists = userContext.user; // Replace with actual auth check logic

  return userExists ? children : <Navigate to="/" />;
}

export default PrivateRouter;
