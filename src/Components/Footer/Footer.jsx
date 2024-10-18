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
        <div className="credits text-center"> {/* Add text-center class for centering */}
          Developed by <a href="https://react-portfolio-mt.netlify.app/?fbclid=IwY2xjawF-hy1leHRuA2FlbQIxMAABHTT5mo4-LjpqVm5FgXuPI4QgvWeW6-gC85FcVa7ibE69xsZvqUEyJNHYiA_aem_Rfydcpo1IjlEGEB7n4OWXg" target="_blank" rel="noopener noreferrer">Mohamed Tlili</a>
          {/* Change the link above to a valid URL if needed */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
