"use client"
import React from 'react';
import { usePathname } from 'next/dist/client/components/navigation';

// import Nav from '../Nav/page';
import './header.css';
import 'react-bootstrap'
import { Button } from 'react-bootstrap';
import 'boxicons'

import Link from 'next/link';
const Links = [
    { name: 'home', path: '/' },
    { name: 'services', path: '/Services' },
    { name: 'resume', path: '/Resume' },
    { name: 'work', path: '/Work' },
    { name: 'contact', path: '/Contact' }
]

const Header = () => {



    return (
        <div>

            <header style={{ margin: "0 50px", width: "94%", display: "flex", justifyContent: "space-between" }} className='header'>
                <div style={{ fontSize: "30px" }} className="logo">
                    <h1>Yahya</h1><span></span>
                </div>
                <div className="nav">
                    <div className="logo">
                <h1 style={{fontSize:"40px"}}>Yahya</h1><span></span>
                    </div>
                    <div>
                    {Links.map((link, index) => {
                        
                    var fff = 8
                        return (
                            <Link className={`${link.path === fff && "here"} lili`} key={index} href={link.path}>
                                {link.name}
                            </Link>
                        )
                    })}
                    </div>
                    <div className='out' onClick={() => {
                        var snnav = document.querySelector(".nav");
                        snnav.classList.remove("toin")
                    }}>
                        <box-icon name='exit' />
                    </div>

                </div>
                <div className="icon" onClick={() => {
                    var snnav = document.querySelector(".nav");
                    snnav.classList.add("toin")
                    // snnav.classList.remove("nav")


                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav>
                    {Links.map((link, index) => {
                        var fff = 8
                        return (
                            <Link className={`${link.path === fff && "here"} lili`} key={index} href={link.path}>
                                {link.name}
                            </Link>
                        )

                    })}
                    <span className='last'>Hire me</span>
                </nav>
            </header>
            

            <script src="gf.js"></script>
        </div>

    )
}
export default Header
