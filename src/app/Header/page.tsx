"use client";

import React, { useState } from 'react';
import { usePathname } from 'next/navigation'; // مسار الاستيراد الصحيح
import Link from 'next/link';
import './header.css';
import 'react-bootstrap'; // تأكد من استخدامه إذا لزم الأمر
const Links = [
    { name: 'home', path: '/' },
    { name: 'services', path: '/Services' },
    { name: 'resume', path: '/Resume' },
    { name: 'work', path: '/W' },
    { name: 'contact', path: '/Contact' }
];

const Header = () => {
    const pathname = usePathname(); // استدعاء الـ Hook في أعلى المستوى
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleNavToggle = () => {
        setIsNavOpen(prevState => !prevState);
    };

    const handleNavClose = () => {
        setIsNavOpen(false);
    };

    return (
        <div>
            <header
                style={{ margin: "0 50px", width: "94%", display: "flex", justifyContent: "space-between" }}
                className={`header ${isNavOpen ? 'nav-open' : ''}`}
            >
                <div style={{ fontSize: "30px" }} className="logo">
                    <h1>Yahya</h1><span></span>
                </div>
                <div className={`nav ${isNavOpen ? 'toin' : ''}`}>
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
                        oooo
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
        </div>
    );
};

export default Header;
