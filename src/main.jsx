import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import Dashboard from './Components/Dashboard/Dashboard';
import ProductCards from './Components/ProductCards/ProductCards';
import ProductDeails from './Components/ProductDetails/ProductDeails';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('../public/categories.json'),
        children: [
          {
            path: '/',
            element: <ProductCards></ProductCards>,
            loader: () => fetch('../public/products.json')
          },
          {
            path: '/category/:category',
            element: <ProductCards></ProductCards>,
            loader: () => fetch('../public/products.json')
          },
        ],
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        loader: () => fetch('../public/products.json')
      },
      {
        path: '/product/:id',
        element: <ProductDeails></ProductDeails>,
        loader: () => fetch('../public/products.json')
      },
    ],

  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} future={{v7_startTransition:true,}} />
  </StrictMode>,
)
