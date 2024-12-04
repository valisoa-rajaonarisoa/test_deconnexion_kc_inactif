import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';

import Membre from './pages/Membre';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/admin/Admin';
import FormationPage from './pages/admin/FormationPage';
import MembrePage from './pages/admin/MembrePage';
import CommandePage from './pages/admin/CommandePage';
import ChartPage from './pages/admin/ChartPage';
import OneCommandePage from './pages/admin/OneCommandePage';

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/admin",
    element: <Admin/>,

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
  {
    path: "/membre",
    element: <Membre/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={ route }></RouterProvider>
  </StrictMode>,
)
