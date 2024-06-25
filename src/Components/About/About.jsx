import React from 'react';
import './style.css';

function About() {
  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img 
              style={{ height: '450px', width: '600px' }} 
              src="assets/img/DSC03053.jpg" 
              className="img-fluid" 
              alt="About me" 
            />
          </div>
          <div className="col-lg-8 content">
            <h2>Fullstack Web Developer</h2>
            <p className="fst-italic py-3">Mohamed Tlili</p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>24 April 1995</span></li>
                  {/* <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li> */}
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+216 29 572 401</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Tunisia</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>29</span></li>
                  {/* <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li> */}
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong>
                    <span>Mohamedtlili1995@hotmail.com</span>
                  </li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            <p className="py-3">
              A motivated, technically competent Full Stack JS Web Developer with a passion for web & mobile
              technologies. My biggest strength is my ability to screen out mundane tasks and prioritise important ones, and the
              ability to navigate and communicate with others in difficult situations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
