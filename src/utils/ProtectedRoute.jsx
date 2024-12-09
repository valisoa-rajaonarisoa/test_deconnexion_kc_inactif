import React, { useEffect, useState } from 'react';
import { useKeycloak } from '../context/KeycloakContext';
import { Navigate, useNavigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  // Récupération des états depuis KeycloakContext
  const { keycloak, authenticated, keycloakInitialized } = useKeycloak();


  const [isAuth,setIsAuth]=useState(false)
//   const navigate = useNavigate();

//   // Affiche une indication de chargement tant que Keycloak n'est pas initialisé
// //   if (!keycloakInitialized) return <div>**** Chargement en cours *****</div>;

//   // Vérification des rôles pour la redirection
//   useEffect(() => {
//     if (keycloak) {
//       if (keycloak.authenticated) {
//         if (keycloak.hasRealmRole('role-admin')) {
//           navigate('/admin');
//         } else if (keycloak.hasRealmRole('role-membre')) {
//           navigate('/membre');
//         } else {
//           navigate('/'); // Aucun rôle correspondant
//         }
//       } else {
//         keycloak.login(); // Lancer le processus de connexion si l'utilisateur n'est pas authentifié
//       }
//     }
//   }, [keycloak, keycloakInitialized, navigate]);



    useEffect(()=>{
     if(keycloak && keycloakInitialized){
            setIsAuth(true)
        }
    },[keycloakInitialized,keycloak])
    

    console.log(isAuth);

  // Si aucun rôle ou autre logique n'a redirigé
  return <div>*********** en attente de l'admin s'il vous plaît, merci ****************</div>;
}
