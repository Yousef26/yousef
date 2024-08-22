'use client'
import { AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import React from 'react'
import Stairs from '../stairs'

function Yes() {
  const namepath = usePathname()
  return (
    <AnimatePresence mode='wait'>
      <div key={namepath}>
        <div className='stairs'>
          <Stairs/>
        </div>
      </div>
    </AnimatePresence>
  )
}

export default Yes