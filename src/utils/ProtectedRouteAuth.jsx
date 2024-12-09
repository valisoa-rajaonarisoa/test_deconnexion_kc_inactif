import React, { Children } from 'react'
import { useKeycloak } from '../context/KeycloakContext'
import { Navigate, useNavigate } from 'react-router-dom';

export default function ProtectedRouteAuth({children}) {


  const navigate= useNavigate();
//   ***********recuperation 
  const {keycloak, authenticated, keycloakInitialized}= useKeycloak();



  if(!keycloakInitialized) return <div>**** Chargement en cours *****</div>
  
  if(keycloak.authenticated){
    if(keycloak.hasRealmRole('role-membre')){
      navigate("/membre")
    }else if(keycloak.hasRealmRole('role-admin')){
      navigate("/admin")
    }else{
      navigate("/protected")
    }
    
  }

  return null;

}
