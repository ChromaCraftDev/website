import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/HomePage.jsx'
import ErrorPage from './Pages/ErrorPage.jsx';
import DownloadPage from './Pages/DownloadPage.jsx'
import QuestionSubmissionPage from './Pages/QuestionSubmissionPage.jsx';

const router = createBrowserRouter([
  {
    path: '/website/',
    element: <HomePage/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: '/website/Download',
    element: <DownloadPage/>
  },
  {
    path: '/website/Ques',
    element: <QuestionSubmissionPage/>
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
