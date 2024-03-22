import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/HomePage.jsx'
import FontPage from './Pages/FontPage.jsx';
import ThemePage from './Pages/ThemePage.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: '/website/',
    element: <HomePage/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: '/website/Fonts',
    element: <FontPage/>,
  },
  {
    path: '/website/Themes',
    element: <ThemePage/>,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
