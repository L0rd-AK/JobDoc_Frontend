import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/home/Navbar'
import { Helmet, HelmetProvider } from 'react-helmet-async'

function App() {

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>JobDoc</title>
        </Helmet>
      </HelmetProvider>

      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
