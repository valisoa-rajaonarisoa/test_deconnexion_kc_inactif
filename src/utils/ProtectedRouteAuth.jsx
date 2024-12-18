import React, { Children } from 'react'
import { useKeycloak } from '../context/KeycloakContext'
import { Navigate, useNavigate } from 'react-router-dom';
import { log10 } from 'chart.js/helpers';
import axios from 'axios';

export default function ProtectedRouteAuth({children}) {


  const navigate= useNavigate();
//   ***********recuperation 
  const {keycloak, keycloakInitialized}= useKeycloak();



  if(!keycloakInitialized) return <div>**** Chargement en cours *****</div>

  
  if(keycloak.authenticated){



    // *************************************envoyer un requette pour l'user


    console.log(keycloak.token);
    const addUser = async ()=>{
      try{

        await axios.post(`${import.meta.env.VITE_API_BK_USERS}`,
          {
            mess :"enregistrement"
          },
          {
            headers : {
              Authorization : `Bearer ${keycloak.token}`,
              "Content-Type": "application/json"
            }
          }
          
        )
        
      }catch(error){
        console.log("une erreur lors de l'ajout de l'errer ", error);
      }
      
    }

    addUser();
    // ***********************************************************************




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
