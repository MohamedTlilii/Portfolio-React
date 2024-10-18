import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './style.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    emailjs
      .sendForm('service_pl28hib', 'template_v4ccq3w', e.target, 'mzO0aBvVVsLJL9-0D')
      .then(() => {
        setSuccessMessage('Your message has been sent. Thank you!');
        setLoading(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Clear success message after 5 seconds
        setTimeout(() => setSuccessMessage(''), 5000);
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setErrorMessage(`Error: ${error.text}`);
        setLoading(false);
        
        // Clear error message after 5 seconds
        setTimeout(() => setErrorMessage(''), 5000);
      });
  };

  return (
    <section id="contact" className="contact section">
      <div className="container section-title">
        <h2>Contact</h2>
      </div>
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4">
            <div className="info-item d-flex">
              <i className="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>Address</h3>
                <p>3 street 42082 Ezzahrouni Tunis</p>
              </div>
            </div>
            <div className="info-item d-flex">
              <i className="bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Phone</h3>
                <p>+216 29 572 401</p>
              </div>
            </div>
            <div className="info-item d-flex">
              <i className="bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Email</h3>
                <p>tlilimohameddev@hotmail.com</p> {/* Resolved email conflict */}
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <form id="contact-form" className="php-email-form" onSubmit={handleSubmit}>
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="col-md-12">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-control"
                    rows="6"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="col-md-12 text-center">
                  {loading && <div className="load">Loading...</div>}
                  {errorMessage && <div className="error">{errorMessage}</div>}
                  {successMessage && <div className="success">{successMessage}</div>}
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
