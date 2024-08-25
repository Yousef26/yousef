"use client"
import { useAnimate } from 'framer-motion'
import React from 'react'
import "../../../styles/globals.css"
function page() {
    const [scope, animate] = useAnimate()
    function ani(){
        animate('#target', { x: 200,y:200, rotate:270}, {duration:.5})
    }
    return (
        <div className='h-screen grid place-content-center bg-white' ref={scope}>
            <div id='target' className='w-24 h-24 bg-violet-800' />
            <div id='target' className='w-24 h-24 bg-violet-800' />

            <button
                className='px-6 py-3 mt-4  bg-slate-800 text-white rounded-md'
                onClick={() => ani()}
            >Trigger now</button>
        </div>
    )
}

export default page