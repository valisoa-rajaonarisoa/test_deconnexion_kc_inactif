import React, { createContext, useContext, useEffect, useState } from 'react';
import Keycloak from 'keycloak-js';

// 1. Création du contexte
export const KeycloakContext = createContext();

// 2. Installation du contexte
export default function KeycloakContextProvider({ children }) {

  const [authenticated, setAuthenticated] = useState(false);
  const [keycloakInitialized, setKeycloakInitialized] = useState(false);
  const [keycloak, setKeycloak] = useState(null);
  const [lastActivity, setLastActivity] = useState(Date.now()); // Ajout d'un état pour suivre l'inactivité

  // 3. Configuration initiale de Keycloak
  const initOptions = {
    url: import.meta.env.VITE_API_KC_URL,
    realm: import.meta.env.VITE_API_KC_REALM,
    clientId: import.meta.env.VITE_API_KC_CLIENT_ID,
  };

  const kc = new Keycloak(initOptions);

  // 4. Rafraîchir le token s'il expire dans 30 secondes
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

  // 5. Initialisation de Keycloak et gestion de la connexion
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

        // Vérifier l'inactivité toutes les 30 secondes (par exemple)
        const intervalId = setInterval(() => {
          if (Date.now() - lastActivity > 60000) { // Si 60 secondes d'inactivité, déconnexion
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

  // 6. Rafraîchissement du token toutes les 25 secondes
  useEffect(() => {
    const intervalId = setInterval(() => {
      refreshToken();
      setLastActivity(Date.now()); // Met à jour le temps de la dernière activité
    }, 25000); // Rafraîchissement du token toutes les 25 secondes
    return () => clearInterval(intervalId);
  }, []);

  // 7. Gérer l'activité de l'utilisateur pour réinitialiser le timer d'inactivité
  const handleUserActivity = () => {
    setLastActivity(Date.now()); // Met à jour la dernière activité lors d'une action de l'utilisateur
  };

  // Ajouter des écouteurs d'événements pour détecter l'activité de l'utilisateur
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

  // 8. Partager Keycloak au reste de l'application
  return (
    <KeycloakContext.Provider value={{ keycloak, authenticated, keycloakInitialized }}>
      {children}
    </KeycloakContext.Provider>
  );
}

// 9. Créer un hook pour utiliser le contexte
export const useKeycloak = () => useContext(KeycloakContext);
