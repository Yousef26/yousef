"use client"
import React, { useState } from 'react'
import "./work.css";
// import loo  from '/images/d1.jpg'
// import loo1 from '/images/d2.jpg'
// import loo2 from '/images/d1.jpg'
// import loo3 from '/images/dk.jpg'
import Link from 'next/link';


import Image from 'next/image';
let num = 0
function Work() {
  let ar = ['React , Css , Js', 'Html , BootStrap , js', 'Html , TailWind , JS , PHP', 'Html , React-BootStrap , React']
  let name = ['E-commorce', 'youtube', 'movies', 'Games']
  let loren = [' ipsum elit. Doloremque recusandae nisi ipsam alia.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia deleniti, non nam as', ' ipsum dolor sit aum elit. Doloremque recusandae nisimet, consectetur adipisicing elit. Officia deleniti, non nam as', 'Lorem ipsum dolor sit aum elit. Doloremque recusandae nisimet, consectetur adipisicing elit. Officia deleniti, non nam as']
  // let img = [loo, loo1, loo2, loo3]
  const [lang, setlang] = useState(ar[0])
  const [nam, setanm] = useState(name[0])
  const [text, settext] = useState(loren[0])
  // const [i, seti] = useState(img[0])

  return (
    <div>
      <Link href="/Restaurant">eeeeeeeeeeeeeeeeeeeeeeeeeeee</Link>
      <div className="page">
        <div className="work">
          <div className="wone">
            <div className="wnum">0{num + 1}</div>
            <div className="wmain">{nam}</div>
            <div className="wtext">{text}</div>
            <div className="wlang">{lang}</div>
            <hr />
            <div className="wicon">
              <div className="wi1">1</div>
              <div className="wi2">0</div>
            </div>
          </div>
          <div className="wtow">
            {/* <Image className='wttt' src={i} alt='' /> */}
            <img src="https://d1ralsognjng37.cloudfront.net/c9999e66-7040-4890-bf72-c5ee49ff0a2a.jpeg" alt="lunch" />
            <div className="wmove">
              <div className="wright" onClick={() => { num <= 0 ? num = num : --num; setlang(ar[num]); setanm(name[num]); settext(loren[num])/** ;seti(img[num]) */ }}></div>
              <div className="wleft" onClick={() => { num >= 3 ? num = num : ++num; setlang(ar[num]); setanm(name[num]); settext(loren[num])/** ;seti(img[num]) */ }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Work