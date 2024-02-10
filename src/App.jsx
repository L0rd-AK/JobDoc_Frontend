import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/home/Navbar'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from './components/Provider/AuthProvider'

function App() {
  const [Admin,setAdmin]=useState(null);
  const { user } = useContext(AuthContext);

  useEffect(()=>{
      fetch(`http://localhost:5000/users/${user?.email}`)
      .then(res => res.json())
      .then(data => {
          setAdmin(data);
          console.log(data);
      })
  },[user?.email])
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>JobDoc</title>
        </Helmet>
      </HelmetProvider>

      <Navbar Admin={Admin}></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
