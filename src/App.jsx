import './App.css'
// import Footer from './components/Footer'
import Header from './components/Header'

import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from './pages/Home'

import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

function App() {

  return (
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="gallery" element={<Gallery/>}></Route>
            <Route path="contact" element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
