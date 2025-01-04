import React, { useEffect, useState } from 'react';
import { FaHome, FaFileAlt } from 'react-icons/fa';
import { GrUserManager, GrServices } from 'react-icons/gr';
import { AiFillPicture } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { IoMenuOutline } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';
import './style.css';
import { useLocation } from 'react-router-dom';

const navItems = [
  { id: 'hero', label: 'Home', icon: <FaHome />, href: '#' },
  { id: 'about', label: 'About', icon: <GrUserManager />, href: '#about' },
  { id: 'resume', label: 'Resume', icon: <FaFileAlt />, href: '#resume' },
  { id: 'portfolio', label: 'Portfolio', icon: <AiFillPicture />, href: '#portfolio' },
  { id: 'services', label: 'Services', icon: <GrServices />, href: '#services' },
  { id: 'contact', label: 'Contact', icon: <MdEmail />, href: '#contact' },
];

function Header({ activeSection, setActiveSection }) {
  const [navVisible, setNavVisible] = useState(false);
  const { hash } = useLocation();

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  useEffect(() => {
    if (hash) {
      const targetElement = document.getElementById(hash.replace('#', ''));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <header id="header" className={`header d-flex flex-column justify-content-center ${navVisible ? 'header-show' : ''}`}>
      <i className="header-toggle d-xl-none" onClick={toggleNav}>
        {navVisible ? <IoMdClose /> : <IoMenuOutline />}
      </i>
      <nav id="navmenu" className={`navmenu ${navVisible ? 'visible' : ''}`}>
        <ul>
          {navItems.map(({ id, label, icon, href }) => (
            <li key={id} className={activeSection === id && hash === '' && id === 'hero' ? 'active' : ''}>
              <a
                href={href} // Use href with section IDs as hash links
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  setActiveSection(id);
                  if (navVisible) toggleNav(); // Close nav on item click
                  window.location.hash = href; // Change the URL hash
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
    </header>
  );
}

export default Header;
