"use client"
import React, { useState } from 'react'
import "./resume.css";
import Head from 'next/head';
import { motion } from "framer-motion"
const Resume = () => {

  // State to track which section to show
  const [showSection, setShowSection] = useState('')

  // Function to render content based on the selected section
  function renderContent() {
    if (showSection === 'experience') {
      return (
        <div className="part-resume">
          <div className="title">My experience</div>
          <div className="smtitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, quo magni. Deserunt laboriosam saepe vitae!</div>
          <div className="Experiences">
            <motion.div
              className="Experience"
              initial={{ x: -200, y: -200 }}
              whileInView={{ x: 0, y: 0 }}
              transition={{
                delay: .1,
                duration: .4,
                type: 'spring',
                stiffness: 200
              }}
            >

              <div className="date">2-2020-2 present</div>
              <div className="main">Full Stack Developer</div>
              <div className="word"><span></span><div className="text">E-commerce</div></div>
            </motion.div>
            <motion.div
              className="Experience"
              initial={{ x: 200, y: -200 }}
              whileInView={{ x: 0, y: 0 }}
              transition={{
                delay: .1,
                duration: .4,
                type: 'spring',
                stiffness: 200
              }}
            >
              <div className="date">2-2020-2 present</div>
              <div className="main">Full Stack Developer</div>
              <div className="word"><span></span><div className="text">E-commerce</div></div>
            </motion.div>
            <motion.div
              className="Experience"
              initial={{ x: -200, y: 200 }}
              whileInView={{ x: 0, y: 0 }}
              transition={{
                delay: .1,
                duration: .4,
                type: 'spring',
                stiffness: 200
              }}
            >
              <div className="date">2-2020-2 present</div>
              <div className="main">Full Stack Developer</div>
              <div className="word"><span></span><div className="text">E-commerce</div></div>
            </motion.div>
            <motion.div
              className="Experience"
              initial={{ x: 200, y: 200 }}
              whileInView={{ x: 0, y: 0 }}
              transition={{
                delay: .1,
                duration: .4,
                type: 'spring',
                stiffness: 200
              }}
            >
              <div className="date">2-2020-2 present</div>
              <div className="main">Full Stack Developer</div>
              <div className="word"><span></span><div className="text">E-commerce</div></div>
            </motion.div>
          </div>
        </div>
      );
    } else if (showSection === 'skills') {
      return (
        <div className="skillss">
          <div className="title">My skills</div>
          <div className="smtitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, quo magni. Deserunt laboriosam saepe vitae!</div>

          <div className="gridskills">
            <div className="gridskill">o</div>
            <div className="gridskill">o</div>
            <div className="gridskill">o</div>
            <div className="gridskill">o</div>
            <div className="gridskill">o</div>
            <div className="gridskill">o</div>
            <div className="gridskill">o</div>
            <div className="gridskill">o</div>
          </div>
          {/* Add more skills */}

        </div>
      );
    } else if (showSection === 'about') {
      return (
        <div className="About">
          <div className="title">About Me</div>
          <div className="smtitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, quo magni. Deserunt laboriosam saepe vitae!</div>
          <div className="aboutgrid">
            <div className="a1">
              <div className="one">Name</div>
              <div className="tow">Yahya</div>
            </div>
            <div className="a1">
              <div className="one">Name</div>
              <div className="tow">Yahya</div>
            </div>
            <div className="a1">
              <div className="one">Name</div>
              <div className="tow">Yahya</div>
            </div>

            <div className="a1">
              <div className="one">Name</div>
              <div className="tow">Yahya</div>
            </div><div className="a1">
              <div className="one">Name</div>
              <div className="tow">Yahya</div>
            </div><div className="a1">
              <div className="one">Name</div>
              <div className="tow">Yahya</div>
            </div><div className="a1">
              <div className="one">Name</div>
              <div className="tow">Yahya</div>
            </div><div className="a1">
              <div className="one">Name</div>
              <div className="tow">Yahya</div>
            </div>
            {/* Add more details if needed */}
          </div>
        </div>
      );
    } else {
      return (
        <div className="part-resume">
          <div className="title">My experience</div>
          <div className="smtitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, quo magni. Deserunt laboriosam saepe vitae!</div>
          <div className="Experiences">
            <motion.div
              className="Experience"
              initial={{ x: -200, y: -200 }}
              whileInView={{ x: 0, y: 0 }}
              transition={{
                delay: 1.3,
                duration: .4,
                type: 'spring',
                stiffness: 200
              }}
            >

              <div className="date">2-2020-2 present</div>
              <div className="main">Full Stack Developer</div>
              <div className="word"><span></span><div className="text">E-commerce</div></div>
            </motion.div>
            <motion.div
              className="Experience"
              initial={{ x: 200, y: -200 }}
              whileInView={{ x: 0, y: 0 }}
              transition={{
                delay: 1.3,
                duration: .4,
                type: 'spring',
                stiffness: 200
              }}
            >
              <div className="date">2-2020-2 present</div>
              <div className="main">Full Stack Developer</div>
              <div className="word"><span></span><div className="text">E-commerce</div></div>
            </motion.div>
            <motion.div
              className="Experience"
              initial={{ x: -200, y: 200 }}
              whileInView={{ x: 0, y: 0 }}
              transition={{
                delay: 1.3,
                duration: .4,
                type: 'spring',
                stiffness: 200
              }}
            >
              <div className="date">2-2020-2 present</div>
              <div className="main">Full Stack Developer</div>
              <div className="word"><span></span><div className="text">E-commerce</div></div>
            </motion.div>
            <motion.div
              className="Experience"
              initial={{ x: 200, y: 200 }}
              whileInView={{ x: 0, y: 0 }}
              transition={{
                delay: 1.3,
                duration: .4,
                type: 'spring',
                stiffness: 200
              }}
            >
              <div className="date">2-2020-2 present</div>
              <div className="main">Full Stack Developer</div>
              <div className="word"><span></span><div className="text">E-commerce</div></div>
            </motion.div>
          </div>
        </div>
      );
    }
  }

  return (
    <div>
      <Head>
        <script src='/k.js' defer></script>
      </Head>
      <div className="page">
        <div className="Ex">
          <div className="part-resume1">
            <motion.button
              className='r5'
              onClick={() => { setShowSection('experience') }}
              whileTap={{ backgroundColor: '#00ff99' }}
              transition={{ duration: .0001, }}
            >Experience</motion.button>
            <motion.button
              onClick={() => setShowSection('skills')}
              whileTap={{ backgroundColor: '#00ff99' }}
              transition={{ duration: .0001, }}
            >Skills</motion.button>
            <motion.button
              onClick={() => setShowSection('about')}
              whileTap={{ backgroundColor: '#00ff99' }}
              transition={{ duration: .0001, }}
            >About Me</motion.button>
          </div>

          {/* Render the content based on the state */}
          {renderContent()}

        </div>
      </div>
    </div>
  )
}

export default Resume;
