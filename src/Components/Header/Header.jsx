import React, { useEffect, useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { GrUserManager } from 'react-icons/gr';
import { FaFileAlt } from 'react-icons/fa';
import { AiFillPicture } from 'react-icons/ai';
import { GrServices } from 'react-icons/gr';
import { MdEmail } from 'react-icons/md';
import { IoMenuOutline } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';
import './style.css';
import { useLocation } from 'react-router-dom';

function Header({ activeSection, setActiveSection }) {
  const [navVisible, setNavVisible] = useState(false);
  const {pathname, hash}=useLocation();

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };
  useEffect(()=>{
    const div = hash.slice(1)
    setActiveSection(div)
  },[hash])

  return (
    <header id="header" className={`header d-flex flex-column justify-content-center ${navVisible ? 'header-show' : ''}`}>
      <i className="header-toggle d-xl-none" onClick={toggleNav}>
        {navVisible ? <IoMdClose /> : <IoMenuOutline />}
      </i>
      <nav id="navmenu" className="navmenu">
        <ul>
          <li className={activeSection === 'hero' && pathname == '/' ? 'active' : ''}>
            <a href="/#" onClick={()=>{setActiveSection('hero')}}>
              <i><FaHome /></i>
              <span>Home</span>
            </a>
          </li>
        <li className={activeSection === 'about' ? 'active' : ''}>
            <a href="/#about" onClick={()=>{setActiveSection('about')}}>
              <i><GrUserManager /></i>
              <span>About</span>
            </a>
          </li>
          <li className={activeSection === 'resume' ? 'active' : ''}>
            <a href="/#resume" onClick={()=>{setActiveSection('resume')}}>
              <i><FaFileAlt /></i>
              <span>Resume</span>
            </a>
          </li>
          <li className={activeSection === 'portfolio' ? 'active' : ''}>
            <a href="/#portfolio" onClick={()=>{setActiveSection('portfolio')}}>
              <i><AiFillPicture /></i>
              <span>Portfolio</span>
            </a>
          </li>
          <li className={activeSection === 'services' ? 'active' : ''}>
            <a href="/#services" onClick={()=>{setActiveSection('services')}}>
              <i><GrServices /></i>
              <span>Services</span>
            </a>
          </li>
          <li className={activeSection === 'contact' ? 'active' : ''}>
            <a href="/#contact" onClick={()=>{setActiveSection('contact')}}>
              <i><MdEmail /></i>
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
