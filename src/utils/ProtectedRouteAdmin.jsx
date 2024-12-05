import React, { Children } from 'react'
import { Navigate } from 'react-router-dom'


export default function ProtectedRouteAdmin({ storedMembre, children }) {
  
  if (storedMembre?.role === "admin") {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}
