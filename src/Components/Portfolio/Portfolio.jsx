<<<<<<< HEAD
import React from 'react';
import { CiLink } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import './style.css';

function Portfolio() {
  const navigate = useNavigate();
  
  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
      </div>

      <div className="container">
        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
          <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

            {/* Portfolio Item 1 */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item">
              <img src="assets/img/1708735836555.jpg" className="img-fluid" alt="EcoRide Electric Scooter"/>
              <div className="portfolio-info">
                <h4>EcoRide</h4>
                <p>Developed E-Commerce EcoRide Electric-Scooter</p>
                <a 
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/portfoliodetails/1");
                  }} 
                  role="button" 
                  title="More Details" 
                  className="details-link"
                >
                  <CiLink />
                </a>
              </div>
            </div>

            {/* Portfolio Item 2 */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item">
              <img src="assets/img/1714619555840.jpg" className="img-fluid" alt="LEDJO Ambient Lighting"/>
              <div className="portfolio-info">
                <h4>LEDJO</h4>
                <p>Developed Website for Ledjo Professional Ambient Lighting</p>
                <a 
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/portfoliodetails/2");
                  }} 
                  role="button" 
                  title="More Details" 
                  className="details-link"
                >
                  <CiLink />
                </a>
              </div>
            </div>

            {/* Portfolio Item 3 */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item">
              <img src="assets/img/ytssss.png" className="img-fluid" alt="YTS Movies Torrents"/>
              <div className="portfolio-info">
                <h4>YTS</h4>
                <p>YTS Movies Torrents website. Download free movies torrents in 720p, 1080p and 3D quality.</p>
                <a 
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/portfoliodetails/3");
                  }} 
                  role="button" 
                  title="More Details" 
                  className="details-link"
                >
                  <CiLink />
                </a>
              </div>
            </div>

            {/* Portfolio Item 4 */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item">
              <img src="assets/img/1.png" className="img-fluid" alt="BEST-CAR Admin Dashboard"/>
              <div className="portfolio-info">
                <h4>BEST-CAR</h4>
                <p>Developed an admin dashboard for a car rental service.</p>
                <a 
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/portfoliodetails/4");
                  }} 
                  role="button" 
                  title="More Details" 
                  className="details-link"
                >
                  <CiLink />
                </a>
              </div>
            </div>

            {/* Portfolio Item 5 */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item">
              <img src="assets/img/13.png" className="img-fluid" alt="Centre Descartes Website"/>
              <div className="portfolio-info">
                <h4>Centre-Descartes</h4>
                <p>Developed and deployed a modern, responsive website for Centre Descartes.</p>
                <a 
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/portfoliodetails/5");
                  }} 
                  role="button" 
                  title="More Details" 
                  className="details-link"
                >
                  <CiLink />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
=======
import React from 'react'
import { GoZoomIn } from "react-icons/go";
import { CiLink } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';



import './style.css';

function Portfolio() {
  const navigate = useNavigate()
  return (
    <section id="portfolio" class="portfolio section">

     
      <div class="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>

      </div>

      <div class="container">

        <div class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">











          <div class="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">






            <div class="col-lg-4 col-md-6 portfolio-item isotope-item ">
              <img src="assets/img/1708735836555.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>EcoRide</h4>
                <p>Developed E-Commerce EcoRide Electric-Scooter</p>
                {/* <a href="assets/img/uspjqh5kfaglpycsftrs.jpg" title="Libero X250"
                  data-gallery="portfolio-gallery-product" class="glightbox preview-link"><i
                    ><GoZoomIn /></i></a> */}
                <a onClick={(e)=>{
                  e.preventDefault()
                  navigate("/portfoliodetails/1")
                }} 
                href="#" 
                 title="More Details" class="details-link"><i
                    ><CiLink /></i></a>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 portfolio-item isotope-item ">
              <img src="assets/img/1714619555840.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>LEDJO</h4>
                <p>Developed Web site Ledjo Professional Ambient lighting</p>
                {/* <a href="assets/img/lhxoyylhbzouc7cc0nnm.avif" title="Diamond Tweeter"
                  data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a> */}
                <a onClick={(e)=>{
                  e.preventDefault()
                  navigate("/portfoliodetails/2")
                }} 
                 href="#" title="More Details" class="details-link"><i
                    class="bi bi-link-45deg"></i></a>
              </div>
            </div>













            <div class="col-lg-4 col-md-6 portfolio-item isotope-item ">
              <img src="assets/img/ytssss.png" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>YTS</h4>
                <p>YTS Movies Torrents website. Download free movies torrents in 720p, 1080p and 3D quality.</p>
                {/* <a href="assets/img/lhxoyylhbzouc7cc0nnm.avif" title="Diamond Tweeter"
                  data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a> */}
                <a onClick={(e)=>{
                  e.preventDefault()
                  navigate("/portfoliodetails/3")
                }} 
                 href="#" title="More Details" class="details-link"><i
                    class="bi bi-link-45deg"></i></a>
              </div>
            </div>


          </div>

        </div>

      </div>
      

    </section>
  )
}

export default Portfolio
>>>>>>> f8defd08c92549671aba33660daee2f51eec006f
