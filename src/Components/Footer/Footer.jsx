import React from 'react';
import './style.css';

function Footer() {
  return (
    <footer id="footer" className="footer position-relative">
      <div className="container">
        <div className="social-links d-flex justify-content-center">
          <a href="https://www.facebook.com/mohamed.tliliiiii/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="bi bi-facebook" style={{ color: "white" }}></i>
          </a>
          <a href="https://github.com/MohamedTlilii?tab=repositories" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="bi bi-github" style={{ color: "white" }}></i>
          </a>
          <a href="https://www.linkedin.com/in/mohamed-tlili-/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="bi bi-linkedin" style={{ color: "white" }}></i>
          </a>
        </div>
        <div className="credits text-center">
          Developed by <a href="https://react-portfolio-mt.netlify.app" target="_blank" rel="noopener noreferrer">Mohamed Tlili</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
