import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const route = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home</h1>
  },
  {
    path: "/admin",
    element: <h1>Admin</h1>
  },
  {
    path: "/membre",
    element: <h1>Membre</h1>
  },
  {
    path: "/login",
    element: <h1>Login</h1>
  },
  {
    path: "/register",
    element: <h1>Register</h1>
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={ route }></RouterProvider>
  </StrictMode>,
)
