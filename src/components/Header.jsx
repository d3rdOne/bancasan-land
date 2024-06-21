// im port Reactfrom 'react'

import logo from '../assets/headerlogo.png'

const Header = () => {
  return (
    <div className="h-20 p-4 px-4 lg:px-12 bg-indigo-800 text-white flex justify-between items-center gap-4 font-sans">
      <div className="h">
        <img src={logo} alt="" className='h-32 lg:h-64'/>
      </div>
      <nav className="hidden md:flex gap-8 font-medium text-xl text-gray-200 tracking-wider">
        <a href="/home">Home</a>
        <a href="/gallery">Gallery</a>
        <a href="/contact">Contact</a>
      </nav>
    </div>
  )
}

export default Header