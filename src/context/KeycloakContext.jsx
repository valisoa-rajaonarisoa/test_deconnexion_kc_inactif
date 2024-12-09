import React, { createContext, useContext, useEffect, useState } from 'react';
import Keycloak from 'keycloak-js';

// 1 Creation du contexte
export const KeycloakContext = createContext();



// 2 installation du contexte
export default function KeycloakContextProvider({ children }) {

  const [authenticated, setAuthenticated] = useState(false);
  const [keycloakInitialized, setKeycloakInitialized] = useState(false);

  const [keycloak,setKeycloak]=useState(null);

  // *************keycloak 1 initial 
  const initOptions = {
    url: import.meta.env.VITE_API_KC_URL,
    realm: import.meta.env.VITE_API_KC_REALM,
    clientId: import.meta.env.VITE_API_KC_CLIENT_ID,
  };

  

  // *************keycloak 2 creation objet , kc, et authenicated pour verifier , keycloakaInitialize pour verifier si v'est bien initialiser 

  const kc = new Keycloak(initOptions); 

 


  // Rafraîchir le token s'il expire dans 30 
  const refreshToken = async () => {
    try {
      const refreshed = await kc.updateToken(30);
      if (refreshed) {
        console.log('Token rafraîchi');
      }
    } catch (error) {
      console.error('Erreur lors du rafraîchissement du token', error);
      kc.logout({ redirectUri: window.location.origin });
    }
  };


  // *************keycloak 3 connexion et config 

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

      } catch (error) {
        console.error('Erreur lors de l’initialisation de Keycloak', error);
      }
    };

    if (!keycloakInitialized) initKeycloak();

  }, [keycloakInitialized]);

  useEffect(() => {
    const intervalId = setInterval(refreshToken, 60000); 
    return () => clearInterval(intervalId);
  }, []);



  // ************************Keycloak 4 et 3 partager au children 
  return (
    <KeycloakContext.Provider value={{ keycloak, authenticated, keycloakInitialized}}>
      {children}
    </KeycloakContext.Provider>
  );
}




// 3. Créer un hook pour utiliser le contexte
export const useKeycloak = () => useContext(KeycloakContext);
