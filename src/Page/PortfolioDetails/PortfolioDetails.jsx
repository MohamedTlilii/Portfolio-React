import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';

function PortfolioDetails() {
  const { projectId } = useParams();

  // Define the projects array (consider moving this to a separate JSON file or API)
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
      description: "Developed a final project at Gomycode under the guidance of Mohamed Anwer Jabri. Built a website using React and JavaScript with user and admin panels. Users can place and track orders, while admins manage products and view orders.",
      category: "E-Commerce",
      client: "Final Project",
      projectDate: "January, 2024",
      projectUrl: "https://eco-ride-electric-scooter.netlify.app/"
    },
    {
      id:  2,
      title: "LEDJO",
      pictures: [
       
        "/assets/img/portfolio/5.avif",
        "/assets/img/portfolio/6.avif",
        "/assets/img/portfolio/7.avif",
        "/assets/img/portfolio/8.avif"

      ],
      description: "Developed a website for an ambient lighting service using the MERN stack, featuring user and admin panels. Users can place and track orders, while admins manage products efficiently.",
      category: "E-Commerce",
      client: "LEDJO Company",
      projectDate: "March , 2024",
      projectUrl: "https://ledjo.netlify.app/"
    }, 
    {
      id:  3,
      title: "YTS",
      pictures: [
       
        "/assets/img/portfolio/9.png",
        "/assets/img/portfolio/10.png",
        "/assets/img/portfolio/11.png",
        "/assets/img/portfolio/12.png"

      ],
      description: "Cloned the YTS Movies Torrents platform, replicating its functionality for downloading movies in 720p, 1080p, and 3D quality. Implemented advanced filtering and search features to deliver a smooth user experience.",
      category: "",
      client: "",
      projectDate: "July, 2024",
      projectUrl: "https://ytsyify.netlify.app/"
    }, 
    {
      id:  4,
      title: "BEST-CAR",
      pictures: [
       
        "/assets/img/portfolio/2.png",
        "/assets/img/portfolio/3.png",
        "/assets/img/portfolio/4.png",
        "/assets/img/portfolio/5.png"

      ],
      description: "Developed an admin dashboard for a car rental platform to manage vehicle listings, rental schedules, and operations. Features include FullCalendar for scheduling and Bootstrap, Semantic UI, and Sass for a clean UI. Built with React.js, TypeScript, and NestJS for a responsive and scalable solution.",
      category: "",
      client: "",
      projectDate: "September, 2024",
      projectUrl: ""
    },
    {
      id:  5,
      title: "Centre-Descartes",
      pictures: [
       
        "/assets/img/portfolio/13.png",
        "/assets/img/portfolio/13.png",
        "/assets/img/portfolio/15.png",
        "/assets/img/portfolio/16.png"

      ],
      description: "Redesigned the Centre Descartes Soutien Scolaire website to be more accessible, user-friendly, and visually modern.",
      category: "",
      client: "Centre Descartes",
      projectDate: "October, 2024",
      projectUrl: "https://singular-cascaron-adc69f.netlify.app/"
    } ];

  const swiperRef = useRef(null);

  const goToNextSlide = () => {
    swiperRef.current?.swiper.slideNext();
  };

  const goToPrevSlide = () => {
    swiperRef.current?.swiper.slidePrev();
  };

  const project = projects.find(proj => proj.id === parseInt(projectId));

  if (!project) {
    return (
      <div className="container">
        <h2>Project not found</h2>
        <p>We're sorry, but the project you are looking for does not exist.</p>
        <a href="/portfolio" className="btn btn-primary">Go back to Portfolio</a>
      </div>
    );
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
              slidesPerView={1} // Fixed number of slides
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
                  <img 
                    src={picture} 
                    loading="lazy" // Lazy loading for performance
                    alt={`Slide ${picIndex + 1} of ${project.title}`} // Improved alt text
                  />
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
