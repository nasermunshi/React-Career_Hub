import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ApplyedJobs from './components/ApplyedJobs/ApplyedJobs';
import ErrorPage from './components/ErrorPage/ErrorPage';
import JobDeatils from './components/JobDeatils/JobDeatils';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/Applied',
        element: <ApplyedJobs></ApplyedJobs>,
        loader: () => fetch('/jobs.json')
      },
      {
        path: '/job/:id',
        element:<JobDeatils></JobDeatils>,
        loader: ()=> fetch('/jobs.json') 
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
