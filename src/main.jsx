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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>,
      },
      {
        path: 'apply',
        element: <AppliedJob></AppliedJob>,
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router}></RouterProvider>
);