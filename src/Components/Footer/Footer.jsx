import React from 'react'
import './style.css';

function Footer() {
  return (
<footer id="footer" class="footer position-relative">
    <div class="container">
      <div class="social-links d-flex justify-content-center">
        <a href="https://www.facebook.com/mohamed.tliliiiii/"><i class="bi bi-facebook" style={{color:"white"}} ></i></a>
        <a href="https://github.com/MohamedTlilii?tab=repositories"><i class="bi bi-github" style={{color:"white"}}></i></a>
        <a href="https://www.linkedin.com/in/mohamed-tlili-/"><i class="bi bi-linkedin" style={{color:"white"}}></i></a>
      </div>
      <div class="container">

        <div class="credits">
       
          Developed by <a>Mohamed Tlili</a>
        </div>
      </div>
    </div>
    
  </footer>  )
}

export default Footer