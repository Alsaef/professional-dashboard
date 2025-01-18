import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Layout from "../Layout/Layout";
import Dashboard from "../pages/Dashboard/Dashboard";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,children:[
        {path:'/',element:<Dashboard/>}
      ]
    },
  ]);
  