"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import './header.css';
import 'react-bootstrap';
import 'boxicons';

const Links = [
    { name: 'home', path: '/' },
    { name: 'services', path: '/Services' },
    { name: 'resume', path: '/Resume' },
    { name: 'work', path: '/Work' },
    { name: 'contact', path: '/Contact' }
];

const Header = () => {
    const pathname = usePathname(); // React Hook at the top level

    const handleNavToggle = () => {
        const snnav = document.querySelector(".nav");
        if (snnav) {
            snnav.classList.toggle("toin");
        }
    };

    const handleNavClose = () => {
        const snnav = document.querySelector(".nav");
        if (snnav) {
            snnav.classList.remove("toin");
        }
    };

    return (
        <header style={{ margin: "0 50px", width: "94%", display: "flex", justifyContent: "space-between" }} className='header'>
            <div style={{ fontSize: "30px" }} className="logo">
                <h1>Yahya</h1><span></span>
            </div>
            <div className="nav">
                <div className="logo">
                    <h1 style={{ fontSize: "40px" }}>Yahya</h1><span></span>
                </div>
                <div>
                    {Links.map((link, index) => (
                        <Link
                            className={`${link.path === pathname ? "here" : ""} lili`}
                            key={index}
                            href={link.path}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
                <div className='out' onClick={handleNavClose}>
                    <box-icon name='exit' />
                </div>
            </div>
            <div className="icon" onClick={handleNavToggle}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav>
                {Links.map((link, index) => (
                    <Link
                        className={`${link.path === pathname ? "here" : ""} lili`}
                        key={index}
                        href={link.path}
                    >
                        {link.name}
                    </Link>
                ))}
                <span className='last'>Hire me</span>
            </nav>
        </header>
    );
};

export default Header;
