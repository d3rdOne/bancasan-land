// import React from 'react'
import { Route, Routes, useLocation } from 'react-router'
import Home from '../pages/Home';
import Gallery from '../pages/Gallery';
import Contact from '../pages/Contact';

const RoutesWithAnimation = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.key}>
      <Route path="/" element={<Home/>}></Route>
      <Route path="gallery" element={<Gallery/>}></Route>
      <Route path="contact" element={<Contact/>}></Route>
    </Routes>
  )
}

export default RoutesWithAnimation