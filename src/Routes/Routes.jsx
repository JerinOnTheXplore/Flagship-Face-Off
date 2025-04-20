import { createBrowserRouter } from "react-router";
import App from "../App";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/Root/ErrorPage/ErrorPage";
import Home from "../pages/Root/Home/Home";
import About from "../pages/Root/About/About";

export const router=createBrowserRouter([
    {
     path:'/',
     Component:Root,
     errorElement:<ErrorPage></ErrorPage>,children:[
      {
        index:true,
        path:'/',
        Component:Home
      },
      {
        path:'/about',
        Component:About
      }
     ]
     
    }
    
  ])