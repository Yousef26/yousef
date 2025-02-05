"use client"
import React, { useState } from 'react';
import "./work.css";
import loo from './-1-Responsive-Personal-Portfolio-Website-using-HTML-CSS-Javascript-YouTube.png';
import loo1 from './-1-Responsive-Personal-Portfolio-Website-using-HTML-CSS-Javascript-YouTube.png';
import loo2 from './Screenshot_14-1-2025_0810_.jpeg';
import loo3 from './photo_6010339301327485947_x.jpg';
import Link from 'next/link';
import Image from 'next/image';

function Work() {
  const ar = ['React , Css , Js', 'Html , BootStrap , js', 'Html , TailWind , JS , PHP', 'Html , CSS , Next'];
  const name = ['E-commorce', 'youtube', 'movies', 'Restaurant'];
  const loren = [
    ' ipsum elit. Doloremque recusandae nisi ipsam alia.',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia deleniti, non nam as',
    ' ipsum dolor sit aum elit. Doloremque recusandae nisimet, consectetur adipisicing elit. Officia deleniti, non nam as',
    'Lorem ipsum dolor sit aum elit. Doloremque recusandae nisimet, consectetur adipisicing elit. Officia deleniti, non nam as'
  ];
  const img = [loo, loo1, loo2, loo3];

  const [lang, setLang] = useState(ar[0]);
  const [nam, setNam] = useState(name[0]);
  const [text, setText] = useState(loren[0]);
  const [i, setI] = useState(img[0]);
  const [num, setNum] = useState(0); // إضافة الحالة لـ num

  const nextProject = () => {
    setNum((prevNum) => {
      const newNum = prevNum < 3 ? prevNum + 1 : prevNum;
      setLang(ar[newNum]);
      setNam(name[newNum]);
      setText(loren[newNum]);
      setI(img[newNum]);
      return newNum;
    });
  };

  const prevProject = () => {
    setNum((prevNum) => {
      const newNum = prevNum > 0 ? prevNum - 1 : prevNum;
      setLang(ar[newNum]);
      setNam(name[newNum]);
      setText(loren[newNum]);
      setI(img[newNum]);
      return newNum;
    });
  };

  return (
    <div>
      <div className="page">
        <div className="work">
          <div className="wone">
            <div className="wnum">0{num + 1}</div>
            <div className="wmain">{nam}</div>
            <div className="wtext">{text}</div>
            <div className="wlang">
              {lang}{' '}
              <Link href="/Restaurant">
                <button className="but-view">view</button>
              </Link>
            </div>
            <hr />
            <div className="wicon">
              <div className="wi1">1</div>
              <div className="wi2">0</div>
            </div>
          </div>
          <div className="wtow">
            <Image className="wttt" src={i} alt="" />
            <div className="wmove">
              <div className="wright" onClick={prevProject}></div>
              <div className="wleft" onClick={nextProject}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
