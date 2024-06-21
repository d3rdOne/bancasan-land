// im port Reactfrom 'react'

import { motion, useCycle } from "framer-motion"
import MenuToggle from "./MenuToggle"
import { useState } from "react";

// import logo from '../assets/headerlogo.png'
const menuBar = {
  open: {
    opacity: 1,
    position: 'fixed',
    height: '100svh',
    transition: {
      delay: 0.1,

    }
  },
  closed: {
    height: '0',
    transition: {
      delay: 0.1,
    }
  }
}


const Header = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }
  return (
    <motion.div
      // layout
      initial = {false}
      animate={isOpen? 'open' : 'closed'}
      variants={menuBar}
      className={`${props['className']} ${isOpen? '' : ''}  bg-indigo-600 sm:bg-transparent flex justify-start items-start gap-4 font-sans z-50`}>
      <nav
        className={'w-full relative mt-8 sm:mt-0'}>

          <motion.div
            layout
            animate={{transition: {delay: 1}}}
            className={`${isOpen? 'block text-gray-200' : ' hidden'} ml-auto p-4 w-full sm:w-fit sm:flex sm:gap-8 font-medium text-xl tracking-wider`}>
              <motion.a href="/" className="block p-1" whileHover={{scale: 1.02}}>Home</motion.a>
              <motion.a href="/gallery" className="block p-1" whileHover={{scale: 1.02}}>Gallery</motion.a>
              <motion.a href="/contact" className="block p-1" whileHover={{scale: 1.02}}>Contact</motion.a>
          </motion.div>

      </nav>
      <div className="absolute right-0">
        <MenuToggle className={`stroke-gray-200 sm:hidden p-4`} toggle={toggleOpen}></MenuToggle>
      </div>

    </motion.div>
  )
}

export default Header