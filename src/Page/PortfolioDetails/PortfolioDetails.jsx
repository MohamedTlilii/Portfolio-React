import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';

function PortfolioDetails() {
  const { projectId } = useParams();
  
  // Define the projects array (consider moving this to a separate JSON file)
  const projects = [
    {
      id: 1,
      title: "EcoRide",
      pictures: [
        "/assets/img/portfolio/1.jpg",
        "/assets/img/portfolio/2.jpg",
        "/assets/img/portfolio/3.jpg",
        "/assets/img/portfolio/4.jpg"
      ],
      description: "Developed a website using the MERN stack, including user and admin panels.",
      category: "E-Commerce",
      client: "Final Project",
      projectDate: "01 January, 2024",
      projectUrl: "https://eco-ride-electric-scooter.netlify.app/"
    },
    // Other projects ...
  ];

  const swiperRef = useRef(null);

  const goToNextSlide = () => {
    swiperRef.current?.swiper.slideNext();
  };

  const goToPrevSlide = () => {
    swiperRef.current?.swiper.slidePrev();
  };

  const project = projects.find(proj => proj.id === parseInt(projectId));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <div className="page-title" data-aos="fade">
        <div className="container">
          <h1>Portfolio Details</h1>
        </div>
      </div>

      <section id="portfolio-details" className="portfolio-details section">
        <div className="container" data-aos="fade-up">
          <div className="portfolio-details-slider swiper">
            <Swiper
              ref={swiperRef}
              loop={true}
              speed={600}
              autoplay={{ delay: 5000 }}
              slidesPerView="auto"
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
              }}
              pagination={{
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
              }}
            >
              {project.pictures.map((picture, picIndex) => (
                <SwiperSlide key={picIndex}>
                  <img src={picture} alt={`Project ${project.title} - Image ${picIndex + 1}`} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div 
              className="swiper-button-prev" 
              onClick={goToPrevSlide} 
              aria-label="Previous slide"
              tabIndex={0} // Make it keyboard-navigable
            />
            <div 
              className="swiper-button-next" 
              onClick={goToNextSlide} 
              aria-label="Next slide"
              tabIndex={0}
            />
            <div className="swiper-pagination" />
          </div>

          <div className="row justify-content-between gy-4 mt-4">
            <div className="col-lg-8" data-aos="fade-up">
              <div className="portfolio-description">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
            </div>

            <div className="col-lg-3" data-aos="fade-up" data-aos-delay="100">
              <div className="portfolio-info">
                <h3>Project Information</h3>
                <ul>
                  <li><strong>Category:</strong> {project.category}</li>
                  <li><strong>Client:</strong> {project.client}</li>
                  <li><strong>Project Date:</strong> {project.projectDate}</li>
                  <li>
                    <strong>Project URL:</strong> 
                    <a 
                      href={project.projectUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ color: 'hsl(209, 58%, 50%)' }}
                    >
                      {project.projectUrl}
                    </a>
                  </li>
                  {project.projectUrl && (
                    <li>
                      <a 
                        href={project.projectUrl} 
                        className="btn-visit align-self-start" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Visit Website
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PortfolioDetails;
