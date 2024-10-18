import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';

function PortfolioDetails() {
  const { projectId } = useParams(); // Fetch the project ID from route params

  // Define the projects array
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
      description: "Developed Web site using the MERN stack. It includes both user and admin panels. Users can place orders, track their status, while admins manage product status and view orders. Guided by Mohamed Anwer Jabri from Gomycode.",
      category: "E-Commerce",
      client: "Final Project",
      projectDate: "01 January, 2024",
      projectUrl: "https://eco-ride-electric-scooter.netlify.app/"
    },
    {
      id: 2,
      title: "LEDJO",
      pictures: [
        "/assets/img/portfolio/5.avif",
        "/assets/img/portfolio/6.avif",
        "/assets/img/portfolio/7.avif",
        "/assets/img/portfolio/8.avif"
      ],
      description: "I built a website for a professional ambient lighting service using the MERN stack: MongoDB, Express, React, and Node.js. The site has user and admin panels. Users can place and track orders, while admins manage products and oversee orders.",
      category: "E-Commerce",
      client: "LEDJO Company",
      projectDate: "15 March, 2024",
      projectUrl: "https://6633042324494d5c1438c840--ledjo.netlify.app/"
    },
    {
      id: 3,
      title: "YTS",
      pictures: [
        "/assets/img/portfolio/9.png",
        "/assets/img/portfolio/10.png",
        "/assets/img/portfolio/11.png",
        "/assets/img/portfolio/12.png"
      ],
      description: "I developed a YTS Movies Torrents website using the MERN stack (MongoDB, Express, React, Node.js), along with Chakra UI and SASS for styling. The website allows users to download free movie torrents in 720p, 1080p, and 3D quality. The interface is user-friendly, with sleek designs powered by Chakra UI and custom styles using SASS.",
      category: "Torrents website",
      client: "Karriery",
      projectDate: "1 July, 2024",
      projectUrl: "https://ytsyify.netlify.app/"
    },
    {
      id: 4,
      title: "BEST-CAR",
      pictures: [
        "/assets/img/portfolio/1.png",
        "/assets/img/portfolio/2.png",
        "/assets/img/portfolio/3.png",
        "/assets/img/portfolio/4.png",
        "/assets/img/portfolio/5.png"
      ],
      description: "Developed an admin dashboard for a car rental service using React, TypeScript, Nest.js, and Node.js. Admins can add, delete, and manage products and events.",
      category: "Car Rental",
      client: "BEST-CAR",
      projectDate: "6 September, 2024",
      projectUrl: ""
    },
    {
      id: 5,
      title: "Centre-Descartes",
      pictures: [
        "/assets/img/portfolio/13.png",
        "/assets/img/portfolio/14.png",
        "/assets/img/portfolio/15.png",
        "/assets/img/portfolio/16.png"
      ],
      description: "Developed and deployed a modern, responsive website for Centre Descartes, optimizing user experience and performance across devices.",
      category: "Educational",
      client: "Centre Descartes",
      projectDate: "1 October, 2024",
      projectUrl: "https://singular-cascaron-adc69f.netlify.app/"
    },
  ];

  // Reference for Swiper instance
  const swiperRef = useRef(null);

  // Function to navigate to the next slide
  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  // Function to navigate to the previous slide
  const goToPrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  // Find the project based on the project ID
  const project = projects.find(proj => proj.id === parseInt(projectId));

  // Check if projectId exists and fetch the project details accordingly
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <div className="page-title" data-aos="fade">
        <div className="container">
          <h1>Portfolio Details</h1>
        </div>
      </div>
      <section id="portfolio-details" className="portfolio-details section">
        <div className="container" data-aos="fade-up">
          <div>
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
              <div className="swiper-button-prev" onClick={goToPrevSlide}></div>
              <div className="swiper-button-next" onClick={goToNextSlide}></div>
              <div className="swiper-pagination"></div>
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
                  <h3>Project information</h3>
                  <ul>
                    <li><strong>Category:</strong> {project.category}</li>
                    <li><strong>Client:</strong> {project.client}</li>
                    <li><strong>Project date:</strong> {project.projectDate}</li>
                    <li><strong>Project URL:</strong> <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'hsl(209, 58%, 50%)' }}>{project.projectUrl}</a></li>
                    {project.projectUrl && (
                      <li><a href={project.projectUrl} className="btn-visit align-self-start" target="_blank" rel="noopener noreferrer">Visit Website</a></li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PortfolioDetails;
