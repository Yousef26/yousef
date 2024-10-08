import React from 'react'
import { animate, motion, reverseEasing } from 'framer-motion'
import "./mo.css"
function Stairs() {
    const animation = {
        initial: {
            top: "0%"
        },
        animate: {
            top: "200%"
        },
        exit: {
            top: ["200%", "0%"]
        }
    }
    const reverseIndex = (index)=>{
        let total = 12
        return total - index - 1
    } 
    return (
        <>
            {[...Array(12)].map((_, index) => {
                return (
                    <motion.div
                        key={index}
                        variants={animation}
                        initial='initial'
                        animate='animate'
                        exit='exit'
                        transition={{
                            duration: .3,
                            ease: 'easeInOut',
                            delay: reverseIndex(index)*.053
                        }}
                        className='full'
                    ></motion.div>
                    
                )
            })}
        </>
    )
}

export default Stairs
