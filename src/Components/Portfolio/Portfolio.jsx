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







            <div class="col-lg-4 col-md-6 portfolio-item isotope-item ">
              <img src="assets/img/13.png" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Centre-Descartes</h4>
                <p>Developed and deployed a modern, responsive website for Centre Descartes.</p>
                {/* <a href="assets/img/lhxoyylhbzouc7cc0nnm.avif" title="Diamond Tweeter"
                  data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a> */}
                <a onClick={(e)=>{
                  e.preventDefault()
                  navigate("/portfoliodetails/4")
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