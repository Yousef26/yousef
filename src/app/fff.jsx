'use client'
import { AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import React from 'react'
import { motion } from "framer-motion"
import './mo.css'
function Tap({children}) {
    const namepath=usePathname()
  return (
    <AnimatePresence >
        <div key={namepath}>
        <motion.div

        className='mo'
        initial={{opacity:1}}
        animate={{opacity:0}}
        transition={{delay:1,duration:.4,ease:'easeInOut'}}
        /> 
        {children}
        </div>
    </AnimatePresence>
  )
}

export default Tap
