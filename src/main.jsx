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
import JobDetail from './components/Pages/JobDetail.jsx';
import AddAjob from './components/Pages/AddAjob.jsx';
import MyJobs from './components/Pages/MyJobs.jsx';
import PrivateRoute from './components/Private-route/PrivateRoute.jsx';
import UpdateJob from './components/accessories/UpdateJob.jsx';
import AppliedJobs from './components/Pages/AppliedJobs.jsx';
import { HelmetProvider } from 'react-helmet-async';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/all-jobs',
        element: <AllJobs></AllJobs>,
      },
      {
        path: '/blogs',
        element: <Blog></Blog>,
      },
      {
        path: '/all-jobs/:id',
        element: <PrivateRoute><JobDetail></JobDetail></PrivateRoute>,
        loader: ({ params }) => fetch(`https://jobdoc.vercel.app/all-jobs/${params.id}`)
      },
      {
        path: '/add-a-job',
        element: <PrivateRoute><AddAjob></AddAjob></PrivateRoute>,
      },
      {
        path: '/my-jobs',
        element: <PrivateRoute><MyJobs></MyJobs></PrivateRoute>,
      },
      {
        path: '/update/:id',
        element: <PrivateRoute><UpdateJob></UpdateJob></PrivateRoute>,
        loader: ({ params }) => fetch(`https://jobdoc.vercel.app/update/${params.id}`)
      },
      {
        path: '/applied-jobs/:id',
        element: <PrivateRoute> <AppliedJobs></AppliedJobs> </PrivateRoute>,
        loader: ({ params }) => fetch(`https://jobdoc.vercel.app/applied-jobs/${params.id}`, { credentials: "include", })
      },
    ]
  },
]);
const helmetContext={

}
ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider context={helmetContext}>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </React.StrictMode>
  </HelmetProvider>,
)
