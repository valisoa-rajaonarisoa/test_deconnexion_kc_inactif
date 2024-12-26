import React, { createContext, useContext, useEffect, useState } from 'react';
import Keycloak from 'keycloak-js';

export const KeycloakContext = createContext();


export default function KeycloakContextProvider({ children }) {

  const [authenticated, setAuthenticated] = useState(false);
  const [keycloakInitialized, setKeycloakInitialized] = useState(false);
  const [keycloak, setKeycloak] = useState(null);

  // **********************DEconnexion inactivité 1 ***recuperation date actuelle ou date du mouvement du souris ou clavier 

  const [lastActivity, setLastActivity] = useState(Date.now());


  const initOptions = {
    url: import.meta.env.VITE_API_KC_URL,
    realm: import.meta.env.VITE_API_KC_REALM,
    clientId: import.meta.env.VITE_API_KC_CLIENT_ID,
  };

  const kc = new Keycloak(initOptions);

  // a  Rafrachir le token normalemnt 
  const refreshToken = async () => {
    try {
      const refreshed = await kc.updateToken(30); // Rafraîchir le token avant 30 secondes d'expiration
      if (refreshed) {
        console.log('Token rafraîchi');
      }
    } catch (error) {
      console.error('Erreur lors du rafraîchissement du token', error);
      kc.logout({ redirectUri: window.location.origin });
    }
  };

  // *********************************DEConnexion inactivity 5 *** GERER DANS LE USEFFECT INITKEYCLOAK 
  useEffect(() => {
    const initKeycloak = async () => {
      try {
        const authenticated = await kc.init({
          onLoad: 'login-required',
          pkceMethod: 'S256',
          checkLoginIframe: false,
        });

        setAuthenticated(authenticated);
        setKeycloakInitialized(true);
        setKeycloak(kc);

        // ********************** DEConnexion inactivity 5 a ************* definir un intervalle tout les 30 sec 
        const intervalId = setInterval(() => {
          // ******************** dateActuel - lastActivity du clavier/souris  > a la session idle time out 
          if (Date.now() - lastActivity > 30000) { // si = ou sup a 30 seconde donc deconnexion 
            kc.logout({ redirectUri: window.location.origin });
          }

        }, 30000); // Vérifier toutes les 30 secondes
        return () => clearInterval(intervalId);

      } catch (error) {
        console.error('Erreur lors de l’initialisation de Keycloak', error);
      }
    };

    if (!keycloakInitialized) initKeycloak();

  }, [keycloakInitialized, lastActivity]); // Ajouter `lastActivity` dans la dépendance pour suivre l'inactivité


  // ***********************DEConnexion inactivity 4 ****** refresh token et mise a jour du lastACtivity tout les 25 secondes 
  useEffect(() => {
    const intervalId = setInterval(() => {
      refreshToken();
      setLastActivity(Date.now()); // Met à jour le temps de la dernière activité
    }, 25000); // Rafraîchissement du token toutes les 25 secondes
    return () => clearInterval(intervalId);
  }, []);


  // ************DEConnexion inactivity 2 *********** fonction pour mettre a jour le lastActivity 
  const handleUserActivity = () => {
    setLastActivity(Date.now()); // Met à jour la dernière activité lors d'une action de l'utilisateur
  };

  // **********DEConnexion inactivity 3 ************ appel du handleUserActivity dans le useEffect si on entends le mouse clavier /souris 
  useEffect(() => {
    const handleEvents = () => {
      window.addEventListener('mousemove', handleUserActivity);
      window.addEventListener('keydown', handleUserActivity);
      return () => {
        window.removeEventListener('mousemove', handleUserActivity);
        window.removeEventListener('keydown', handleUserActivity);
      };
    };

    handleEvents();
  }, []);


  return (
    <KeycloakContext.Provider value={{ keycloak, authenticated, keycloakInitialized }}>
      {children}
    </KeycloakContext.Provider>
  );
}

// 9. Créer un hook pour utiliser le contexte
export const useKeycloak = () => useContext(KeycloakContext);
