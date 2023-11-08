import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/home/Navbar'
import { Helmet } from 'react-helmet-async'

function App() {

  return (
    <>
      <Helmet>
        <title>JobDoc</title>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      </Helmet>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
