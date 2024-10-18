import React from 'react';
import './style.css';

function Resume() {
  return (
    <section id="resume" className="resume section">

      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
      </div>

      <div className="container">

        <div className="row">

          <div className="col-lg-7" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Summary</h3>

            <div className="resume-item pb-0">
              <h4>Mohamed Tlili</h4>
              <p><em>Graduated with a Full Stack Developer Certificate, looking to leverage experience building responsive and scalable web apps to solve interesting problems that delight end users.</em></p>
              <ul>
                <li>Tunisia</li>
                <li>+216 29 572 401</li>
                <li>Mohamedtlili1995@hotmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Full-Stack Javascript Bootcamp</h4>
              <h5>2023 - 2024</h5>
              <p><em>Learned the MERN track which includes HTML5, CSS3, JavaScript ES6, ReactJS, Redux, NodeJS, Express, MongoDB and several libraries such as Bootstrap, Material-UI, Axios, and Mongoose. Built a fully functional web application using the MERN stack that integrates all the knowledge and skills acquired during the training.</em></p>
            </div>

            <div className="resume-item">
              <h4>Technician in Customs Formalities</h4>
              <h5>2017 - 2019</h5>
              <p><em>Learned to handle the legal and administrative aspects of international trade. Understood customs regulations, prepared documents, and ensured compliance, readying for roles in customs brokerage and freight forwarding.</em></p>
            </div>

          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Professional Experience </h3>
            
            

            <div className="resume-item">
              <h4>Front-End Developer</h4>
              <h5>August 2024 - Present</h5>
              <p><em>Karriery</em></p>
              <ul>
                <li>Collaborate on tasks via Microsoft Teams platform to improve and optimize the user interface, ensuring a seamless and visually appealing experience.</li>
                {/* <li>Developed a responsive portfolio</li>
                <li>Developed a responsive portfolio React</li>
                <li>Learned Angular TypeScript, Nest.js, PostgresSQL</li> */}
                {/* <li>Recommended and consulted with clients on the most appropriate graphic design</li> */}
                
              </ul>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Internship</h3>
            
            

            <div className="resume-item">
              <h4>FullStack</h4>
              <h5>May 2024-August 2024</h5>
              <p><em>Karriery</em></p>
              <ul>
                <li>Enhanced problem-solving skills</li>
                <li>Developed a responsive portfolio</li>
                <li>Developed a responsive portfolio React</li>
                <li>Learned Angular TypeScript, Nest.js, PostgresSQL</li>
                {/* <li>Recommended and consulted with clients on the most appropriate graphic design</li> */}
                
              </ul>
            </div>

          </div>
          </div>
         

        </div>

      </div>

    </section>
  );
}
