import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from './Components/ErrorPage';
import Statistics from './Components/Statistics/Statistics';
import AppliedJob from './Components/AppliedJob/AppliedJob';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import JobDetails from './Components/Job Details/JobDetails';
import appliedJobsLoader from './loader/appliedJobsLoader';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("featurejob.json"),
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "applied-jobs",
        element: <AppliedJob></AppliedJob>,
        loader: appliedJobsLoader
      },
      {
        path: "blogs",
        element: <Blog></Blog>,
      },
      {
        path: "/details/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch("featurejob.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router}></RouterProvider>
);

