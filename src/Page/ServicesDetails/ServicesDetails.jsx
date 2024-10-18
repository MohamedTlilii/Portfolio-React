import React from 'react';
import './style.css';
import { useParams } from 'react-router-dom';

function ServicesDetails({ servicesData }) {
  const { serviceId } = useParams();
  const service = servicesData.find(service => service.id === Number(serviceId));

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <main id="main-main-main" class="main">
      <div className="page-title" data-aos="fade">
        <div className="container">
          <h1>Service Details</h1>
        </div>
      </div>
      <section id="service-details" className="service-details section">
        <div className="container">
          <div className="row gy-5">
            <div id="service-details-img-web"  className="col-lg-8 ps-lg-5" data-aos="fade-up" data-aos-delay="200">
              {/* <div  id={`service-details${service.id}`}> */}
                <div id="script-tlilos">
                  <script id="script-tlilos" src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> 
                  <dotlottie-player
                    src={service.lottieSrc}
                    background="transparent"
                    speed="1"
                    style={{ width: '400px', height: '400px' }}
                    loop
                    autoplay
                  ></dotlottie-player>
                </div>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>
                    {service.points.map((point, index) => (
                      <li key={index}><i className="bi bi-check-circle"></i> <span>{point}</span></li>
                    ))}
                  </ul>
                  <p>{service.additionalInfo}</p>
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}
      </section>
    </main>
  );
}

export default ServicesDetails;
