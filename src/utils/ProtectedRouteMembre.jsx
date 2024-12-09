import React, { Children } from 'react'
import { useKeycloak } from '../context/KeycloakContext'
import { Navigate } from 'react-router-dom';

export default function ProtectedRouteMembre({children}) {

//   ***********recuperation 
  const {keycloak, authenticated, keycloakInitialized}= useKeycloak();



  if(!keycloakInitialized) return <div>**** Chargement en cours *****</div>

 
  // return keycloak.authenticated && keycloak.hasRealmRole('role-membre')  ? children : <Navigate to="/" />;

  if(keycloak.authenticated){
    if(keycloak.hasRealmRole('role-membre')){
      
      return children
    }else if(keycloak.hasRealmRole('role-admin')){
      return <Navigate to="/admin" />
    }
  }else{
    return <Navigate to="/" />
  }


}
