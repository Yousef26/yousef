import React from 'react'
import loo from './about.jpg'
import Image from 'next/image';
import "./photo.css"
const Photo = () => {
  return (
    <div className='ii'  style={{ backgroundColor:"transparent", borderRadius:"50%"}}>
      <div className="yyy"></div>
      <div className="yyyy"></div>

      <Image className='ttt' src={loo}  />
    </div>
  )
}

export default Photo
