import React, { Children } from 'react'
import { Navigate } from 'react-router-dom'


export default function ProtectedRouteMembre({ storedMembre, children }) {
  
  if (storedMembre?.role === "membre") {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}
