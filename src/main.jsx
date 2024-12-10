import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import Membre from './pages/Membre';

import Admin from './pages/admin/Admin';
import FormationPage from './pages/admin/FormationPage';
import MembrePage from './pages/admin/MembrePage';
import CommandePage from './pages/admin/CommandePage';
import ChartPage from './pages/admin/ChartPage';
import OneCommandePage from './pages/admin/OneCommandePage';
import { Toaster } from 'react-hot-toast';


import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
import KeycloakContextProvider from './context/KeycloakContext';
import ProtectedRouteAdmin from './utils/ProtectedRouteAdmin';
import ProtectedRouteMembre from './utils/ProtectedRouteMembre';

import ProtectedRouteAuth from './utils/ProtectedRouteAuth';
import ProtectedRouteHome from './utils/ProtectedRouteHome';
import Home from './pages/public/Home';
import AuteurPage from './pages/auteur/AuteurPage';
import ProfilePage from './pages/ProfilePage';




const route = createBrowserRouter([
  {
    path: "/",
    element:
    <ProtectedRouteHome>
      <Home/>
    </ProtectedRouteHome>
  },

  // **********************protected 
  {
    path: "/protected",
    element:
    <KeycloakContextProvider> 
      <ProtectedRouteAuth/>
    </KeycloakContextProvider>
   
  },

  // *************************admin 
  {
    path: "/admin",
    element:  
    <KeycloakContextProvider>
      <ProtectedRouteAdmin >
        <Admin/>
      </ProtectedRouteAdmin>
    </KeycloakContextProvider>
   
  ,

    children:[

      {
        path: "/admin/formation",
        element: <FormationPage/>
      },

      {
        path: "/admin/commande",
        element: <CommandePage/>
      },

      {
        path: "/admin/commande/:id",
        element: <OneCommandePage/>
      },

      {
        path: "/admin/membre",
        element: <MembrePage/>
      },

      ,{
        path:"/admin/",
        element: <ChartPage/>
      }

    ]
  },


  // *****************************membre 
  {
    path: "/membre",
    element: <KeycloakContextProvider>
    <ProtectedRouteMembre >
      <Membre/>
    </ProtectedRouteMembre>
  </KeycloakContextProvider>
  },


  //************************* auteur  */
  {
    path: "/auteur",
    element: <AuteurPage/>,

    children:[

      {
        path: "/auteur/formation",
        element: <FormationPage/>
      },

      {
        path: "/auteur/commande",
        element: <CommandePage/>
      },

      {
        path: "/auteur/commande/:id",
        element: <OneCommandePage/>
      },

      {
        path: "/auteur/membre",
        element: <MembrePage/>
      },

      // *******************************profile 
      {
        path:"/auteur/profile/:id",
        element: <ProfilePage/>
      }

    ]
  },



  
]);



const queryClient=new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <QueryClientProvider client={queryClient}>
      <Toaster/>
      <RouterProvider router={ route }></RouterProvider>
    </QueryClientProvider>
    
  </StrictMode>,
)
