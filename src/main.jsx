import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './components/Provider/AuthProvider.jsx';
import Error from './components/404_Not_Found/Error.jsx';
import App from './App.jsx';
import Login from './components/login-register/Login.jsx';
import Register from './components/login-register/Register.jsx';
import Home from './components/home/Home.jsx';
import AllJobs from './components/Pages/AllJobs.jsx';
import Blog from './components/Pages/Blog.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/login',
        element: <Login></Login>,
      },
      {
        path:'/register',
        element: <Register></Register>,
      },
      {
        path:'/all-jobs',
        element: <AllJobs></AllJobs>,
      },
      {
        path:'/blogs',
        element: <Blog></Blog>,
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
