import React, { Children } from 'react'
import { useKeycloak } from '../context/KeycloakContext'
import { Navigate } from 'react-router-dom';

export default function ProtectedRouteAdmin({children}) {

//   ***********recuperation 
  const {keycloak, authenticated, keycloakInitialized}= useKeycloak();


  if(!keycloakInitialized) return <div>**** Chargement en cours *****</div>

  
  if(keycloak.authenticated){
    if(keycloak.hasRealmRole('role-admin')){
      return children
    }else if(keycloak.hasRealmRole('role-membre')){
      return <Navigate to="/membre" />
    }
  }else{
    return <Navigate to="/" />
  }

}
