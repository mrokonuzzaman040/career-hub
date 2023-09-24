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
import Error from './components/Error/Error';
import JobDetails from './components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:'/applyed',
        element: <ApplyedJobs></ApplyedJobs>,
        loader: () => fetch('./jobs.json'),
      },
      {
        path: "job/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch('./jobs.json'),
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
