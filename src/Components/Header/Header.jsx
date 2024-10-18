import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import { FaHome, FaFileAlt } from 'react-icons/fa';
import { GrUserManager, GrServices } from 'react-icons/gr';
import { AiFillPicture } from 'react-icons/ai';
=======
import { FaHome } from 'react-icons/fa';
import { GrUserManager } from 'react-icons/gr';
import { FaFileAlt } from 'react-icons/fa';
import { AiFillPicture } from 'react-icons/ai';
import { GrServices } from 'react-icons/gr';
>>>>>>> f8defd08c92549671aba33660daee2f51eec006f
import { MdEmail } from 'react-icons/md';
import { IoMenuOutline } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';
import './style.css';
import { useLocation } from 'react-router-dom';

<<<<<<< HEAD
const navItems = [
  { id: 'hero', label: 'Home', icon: <FaHome />, href: '/#' },
  { id: 'about', label: 'About', icon: <GrUserManager />, href: '/#about' },
  { id: 'resume', label: 'Resume', icon: <FaFileAlt />, href: '/#resume' },
  { id: 'portfolio', label: 'Portfolio', icon: <AiFillPicture />, href: '/#portfolio' },
  { id: 'services', label: 'Services', icon: <GrServices />, href: '/#services' },
  { id: 'contact', label: 'Contact', icon: <MdEmail />, href: '/#contact' },
];

function Header({ activeSection, setActiveSection }) {
  const [navVisible, setNavVisible] = useState(false);
  const { pathname, hash } = useLocation();
=======
function Header({ activeSection, setActiveSection }) {
  const [navVisible, setNavVisible] = useState(false);
  const {pathname, hash}=useLocation();
>>>>>>> f8defd08c92549671aba33660daee2f51eec006f

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };
<<<<<<< HEAD

  useEffect(() => {
    const div = hash.slice(1);
    setActiveSection(div);
  }, [hash, setActiveSection]);
=======
  useEffect(()=>{
    const div = hash.slice(1)
    setActiveSection(div)
  },[hash])
>>>>>>> f8defd08c92549671aba33660daee2f51eec006f

  return (
    <header id="header" className={`header d-flex flex-column justify-content-center ${navVisible ? 'header-show' : ''}`}>
      <i className="header-toggle d-xl-none" onClick={toggleNav}>
        {navVisible ? <IoMdClose /> : <IoMenuOutline />}
      </i>
<<<<<<< HEAD
      <nav id="navmenu" className={`navmenu ${navVisible ? 'visible' : ''}`}>
        <ul>
          {navItems.map(({ id, label, icon, href }) => (
            <li key={id} className={activeSection === id && pathname === '/' && id === 'hero' ? 'active' : ''}>
              <a
                href={href}
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  setActiveSection(id);
                  if (navVisible) toggleNav(); // Close nav on item click
                }}
                aria-label={`Go to ${label}`}
              >
                <i>{icon}</i>
                <span>{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {navVisible && <div className="backdrop" onClick={toggleNav}></div>} {/* Optional backdrop */}
=======
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
>>>>>>> f8defd08c92549671aba33660daee2f51eec006f
    </header>
  );
}

export default Header;
