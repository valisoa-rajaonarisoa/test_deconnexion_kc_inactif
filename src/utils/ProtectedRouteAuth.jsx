import React, { Children } from 'react'
import { useKeycloak } from '../context/KeycloakContext'
import { Navigate, useNavigate } from 'react-router-dom';

export default function ProtectedRouteAuth({children}) {


  const navigate= useNavigate();
//   ***********recuperation 
  const {keycloak, keycloakInitialized}= useKeycloak();



  if(!keycloakInitialized) return <div>**** Chargement en cours *****</div>
  console.log(keycloak);
  
  if(keycloak.authenticated){
    // const roleMembrePresent = keycloak.realmAccess && keycloak.realmAccess.roles.includes("role-membre");
    // if(roleMembrePresent) {
      
    // }
    // console.log(keycloak);

    let whoIsUser=null;
    
    if(keycloak.hasRealmRole('role-membre')){

      whoIsUser="membre";

      navigate("/membre")
    }else if(keycloak.hasRealmRole('role-admin')){
      whoIsUser="admin";

      navigate("/admin");

    }

    localStorage.setItem("user",whoIsUser);
  
    
  }

  return null;

}
