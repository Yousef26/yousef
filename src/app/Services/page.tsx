import React from 'react';
import "./services.css"
import o from './right-arrow-free-vector.jpg'
import Image from 'next/image';
// import Link from 'next/link';
function Services() {
  return (

    <div>

      <div className="page">
        <div className="skills">

          <a className='mahdsh' href="https://google.com">
            <div className="skill">
              <div className="top">
                <div className="num">01</div>
                <div className="iicon"><Image className='dicoonh' src={o} alt='f'></Image></div>
              </div>
              <h1>web Development</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quae doloribus facere! Debitis, voluptas quasi.</p>
            </div>
          </a>


          <a className='mahdsh' href="https://google.com">
          <div className="skill">
            <div className="top">
              <div className="num">02</div>
              <div className="iicon"><Image className='dicoonh' src={o} alt='f'></Image></div>
            </div>
            <h1>web Development</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quae doloribus facere! Debitis, voluptas quasi.</p>
          </div>
                </a>


        <a className='mahdsh' href="https://google.com">

        <div className="skill">
          <div className="top">
            <div className="num">03</div>
            <div className="iicon"><Image className='dicoonh' src={o} alt='f'></Image></div>
          </div>
          <h1>web Development</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quae doloribus facere! Debitis, voluptas quasi.</p>
        </div>
      </a>

      <a className='mahdsh' href="https://google.com">

      <div className="skill">
        <div className="top">
          <div className="num">04</div>
          <div className="iicon"><Image className='dicoonh' src={o} alt='f'></Image></div>
        </div>
        <h1>web Development</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quae doloribus facere! Debitis, voluptas quasi.</p>
      </div>
    </a>
        </div >
      </div >
    </div >
  )
}

export default Services
