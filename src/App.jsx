import React from 'react'
import Home from './pages/home/home'
import About from './pages/about/about'
import Portfolio from './pages/portfolio/portfolio'
import Contacto from './pages/contacto/contacto'
import AppLayout from './components/AppLayout'
import { createBrowserRouter, RouterProvider } from 'react-router'


const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children:[
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/portfolio',
          element: <Portfolio />,
        },
        {
          path: '/contacto',
          element: <Contacto />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />
}
export default App;