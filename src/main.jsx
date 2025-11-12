import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './Components/homePage.jsx';
import ListadoProductos from './Components/listadoProductos.jsx';
import Card from './Components/card.jsx';
import Cart from './Components/cart.jsx';

const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
    children: [
      {
        path:"",
        element: <HomePage />
      },
      {
        path: "products",
        element: <ListadoProductos />
      },
      {
        path: "products/:id",
        element: <Card />
      },
      {
        path : "/cart",
        element : <Cart />

      }
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
