// "use client";

// import React, { useState } from 'react';
// import { usePathname } from 'next/navigation'; // مسار الاستيراد الصحيح
// import Link from 'next/link';
// import './header.css';
// import 'react-bootstrap'; // تأكد من استخدامه إذا لزم الأمر
// const Links = [
//     { name: 'home', path: '/' },
//     { name: 'services', path: '/Services' },
//     { name: 'resume', path: '/Resume' },
//     { name: 'work', path: '/Work' },
//     { name: 'contact', path: '/Contact' }
// ];

// const Header = () => {
//     const pathname = usePathname(); // استدعاء الـ Hook في أعلى المستوى
//     const [isNavOpen, setIsNavOpen] = useState(false);

//     const handleNavToggle = () => {
//         setIsNavOpen(prevState => !prevState);
//     };

//     const handleNavClose = () => {
//         setIsNavOpen(false);
//     };
//     function page() {
//         if(pathname=='/' || pathname=='/Services'|| pathname=='/Resume'|| pathname=='/Work' ||pathname=='/Work'|| pathname=='/Contact') {
//             return(
//                 <header
//                                 style={{ margin: "0 50px", width: "94%", display: "flex", justifyContent: "space-between" }}
//                                 className={`header ${isNavOpen ? 'nav-open' : ''}`}
//                             >
//                                 <div style={{ fontSize: "30px" }} className="logo">
//                                     <h1>Yahya</h1><span></span>
//                                 </div>
//                                 <div className={`nav ${isNavOpen ? 'toin' : ''}`}>
//                                     <div className="logo">
//                                         <h1 style={{ fontSize: "40px" }}>Yahya</h1><span></span>
//                                     </div>
//                                     <div>
                
                
//                                         {Links.map((link, index) => (
//                                             <Link
//                                                 className={`${link.path === pathname ? "here" : ""} lili`}
//                                                 key={index}
//                                                 href={link.path}
//                                             >
//                                                 {link.name}
//                                             </Link>
//                                         ))}
//                                     </div>
//                                     <div className='out' onClick={handleNavClose}>
//                                         =
//                                     </div>
//                                 </div>
//                                 <div className="icon" onClick={handleNavToggle}>
//                                     <span></span>
//                                     <span></span>
//                                     <span></span>
//                                 </div>
//                                 <nav>
//                                     {Links.map((link, index) => (
//                                         <Link
//                                             className={`${link.path === pathname ? "here" : ""} lili`}
//                                             key={index}
//                                             href={link.path}
//                                         >
//                                             {link.name}
//                                         </Link>
//                                     ))}
//                                     <span className='last'>Hire me</span>
//                                 </nav>
//                             </header>
//                             )
//         }else{
 
            
//         }
//     }
   
//     return (
//         <div>{ 

            
//             page()
            
//             }
            
//         </div>
//     );
// };

// export default Header;
"use client";

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'; // مسار الاستيراد الصحيح
import Link from 'next/link';
import './header.css';
import 'react-bootstrap'; // تأكد من استخدامه إذا لزم الأمر

const Links = [
  { name: 'home', path: '/' },
  { name: 'services', path: '/Services' },
  { name: 'resume', path: '/Resume' },
  { name: 'work', path: '/Work' },
  
];

const Header = () => {
  const pathname = usePathname(); // استدعاء الـ Hook في أعلى المستوى
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(null); // لتتبع العنصر الذي تم النقر عليه

  const handleNavToggle = () => {
    setIsNavOpen(prevState => !prevState);
  };

  const handleNavClose = () => {
    setIsNavOpen(false);
  };

  const handleClick = (index) => {
    setClickedIndex(index); // تعيين العنصر الذي تم النقر عليه
    handleNavClose(); // إغلاق القائمة عند النقر على الرابط
  };

  // إغلاق القائمة عند تغيير المسار
  useEffect(() => {
    handleNavClose();
  }, [pathname]);

  function page() {
    if (pathname == '/' || pathname == '/Services' || pathname == '/Resume' || pathname == '/Work' || pathname == '/Contact') {
      return (
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
                  className={`${link.path === pathname ? "here" : ""} lili ${clickedIndex === index ? 'clicked' : ''}`}
                  key={index}
                  href={link.path}
                  onClick={() => handleClick(index)} // تعيين العنصر الذي تم النقر عليه
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className='out' onClick={handleNavClose}>
              =
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
                className={`${link.path === pathname ? "here" : ""}  lili ${clickedIndex === index ? 'clicked' : ''}`}
                key={index}
                href={link.path}
                onClick={() => handleClick(index)} // تعيين العنصر الذي تم النقر عليه
              >
                {link.name}
              </Link>
            ))}
            <span className='last'> <link rel="icon" href="/favicon.ico" />Hire me</span>
          </nav>
        </header>
      );
    } else {
      return null; // أو يمكنك إرجاع شيء آخر هنا
    }
  }

  return (
    <div>{page()}</div>
  );
};

export default Header;
