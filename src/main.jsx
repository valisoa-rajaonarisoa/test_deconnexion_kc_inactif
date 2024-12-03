import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import Admin from './pages/Admin';
import Membre from './pages/Membre';
import Login from './pages/Login';
import Register from './pages/Register';

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/admin",
    element: <Admin/>
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
