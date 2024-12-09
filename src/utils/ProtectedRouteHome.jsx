import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function ProtectedRouteHome({ children }) {
  const navigate = useNavigate();
  const isAuth = localStorage.getItem("user");

  useEffect(() => {
    if (isAuth) {
      if (isAuth === "admin") {
        navigate('/admin');
      } else if (isAuth === "membre") {
        navigate('/membre');
      }
    }
  }, [isAuth, navigate]); // L'effet est déclenché lorsque isAuth ou navigate changent


  console.log(isAuth);
  
  // Si l'utilisateur n'est pas authentifié ou n'est pas dans les rôles "admin" ou "membre", on affiche les enfants
  if (!isAuth) {
    return children;
  }

  // Sinon, on ne retourne rien (la redirection se fera avant)
  return null;
}
