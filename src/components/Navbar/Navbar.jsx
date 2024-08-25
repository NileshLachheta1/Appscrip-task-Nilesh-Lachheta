import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import './Navbar.css';
import { SearchIcon, HeartIcon, UserIcon, BagIcon, ArrowIcon } from '../Constants/icons.js'
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {

        const [isOpen, setIsOpen] = useState(true);

        const toggleMenu = () => {
                setIsOpen(!isOpen);
                console.log("first")
        }

        return (
                <>
                    <div id='sub-nav'>
                        <div className='sub-nav-section'><HeartIcon /> Lorem, ipsum dolor</div>
                        <div className='sub-nav-section sub-nav-section-2'><HeartIcon /> Lorem, ipsum dolor</div>
                        <div className='sub-nav-section sub-nav-section-3'><HeartIcon /> Lorem, ipsum dolor</div>
                    </div>
                    <div id='nav-main'>
                        <div id='nav-maindiv'>
                            <div id='nav-logo-section'>
                                <button>
                                <AiOutlineMenu id='nav-menu-icon' onClick={toggleMenu} />
                                </button>
                                <img src={logo} id='logo' alt="" />
                            </div>
                            <div>
                                <h1 id='logo-heading'>LOGO</h1>
                            </div>
                            <div id='nav-icons'>
                                <SearchIcon className='nav-icon' />
                                <HeartIcon className='nav-icon' />
                                <BagIcon className='nav-icon' />
                                <UserIcon className='nav-icon' id='user-icon' />
                                <span id='language-icon'  >ENG <ArrowIcon className='nav-icon' /> </span>
                            </div>
                        </div>
                        <ul id={`${isOpen ? "nav-links" : ""}`}>
                            <li className='nav-link'>SHOP</li>
                            <li className='nav-link'>SKILLS</li>
                            <li className='nav-link'>STORIES</li>
                            <li className='nav-link'>ABOUT</li>
                            <li className='nav-link'>CONTACT US</li>
                        </ul>
                    </div>
                </>
        )
}

export default Navbar;