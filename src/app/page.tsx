import React from 'react'
import './home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { hover } from '@testing-library/user-event/dist/hover';
// import Image from 'next/image';
import  Photo  from "./photo";
import logo from './hhh.png'

const Home = () => {
    return (
        <div>
            <div className="container">
                <div className="text">
                    <h1>Hello I'm <br /><span>Yousef Kazem</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quia. Natus sit quibusdam dolore soluta quisquam id, facilis consequatur est?</p>
                    <div className="con">
                        <div className="btn">Download CV</div>
                        <div className="conn">
                            <FontAwesomeIcon className='sm' icon={faGithub} style={{ width: "50px", height: "50px", margin:"15px 5px" }} />
                            <FontAwesomeIcon className='sm' icon={faGithub} style={{ width: "50px", height: "50px", margin:"15px 5px" }} />
                            <FontAwesomeIcon className='sm' icon={faGithub} style={{ width: "50px", height: "50px", margin:"15px 5px" }} />
                        </div>
                    </div>
                </div>
                <div className="img">
                <Photo/>
                </div>
            </div>
        </div>
    )
}

export default Home