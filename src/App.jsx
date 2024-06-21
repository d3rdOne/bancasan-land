import './App.css'
// import Footer from './components/Footer'
import Header from './components/Header'

import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom"
import Home from './pages/Home'

// import Gallery from './pages/Gallery'
// import Contact from './pages/Contact'
// import { AnimatePresence } from 'framer-motion'
import RoutesWithAnimation from './components/RoutesWithAnimation'
import LocationProvider from './components/LocationProvider'

function App() {

  return (
    <>
    <div className='scroll-smooth'>
      {/* <Header></Header> */}
      <BrowserRouter>
        <LocationProvider>
          <RoutesWithAnimation/>
        </LocationProvider>
      </BrowserRouter>
    </div>

    </>

  )
}

export default App
