import React from 'react'
import loo from './about.jpg'
import Image from 'next/image';
import "./photo.css"
const Photo = () => {
  return (
    <div className='yyy'  style={{ backgroundColor:"transparent", borderRadius:"50%"}}>
      <Image className='ttt' src={loo}  />
    </div>
  )
}

export default Photo
