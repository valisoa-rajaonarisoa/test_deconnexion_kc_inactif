import React, { Children } from 'react'
import { useKeycloak } from '../context/KeycloakContext'
import { Navigate } from 'react-router-dom';

export default function ProtectedRouteAdmin({children}) {

//   ***********recuperation 
  const {kc, authenticated, keycloakInitialized}= useKeycloak();



  if(!keycloakInitialized) return <div>**** Chargement en cours *****</div>


  
  return authenticated ? children : <Navigate to="/" />;

  
}
