import React, { useEffect, useState } from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import './style.css';

function Hero({ activeSection }) {
  const words = ['Developer', 'Freelancer'];
  const [currentWord, setCurrentWord] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(200);

  useEffect(() => {
    const handleTyping = () => {
      const fullWord = words[wordIndex];
      setCurrentWord((prev) =>
        isDeleting ? fullWord.substring(0, prev.length - 1) : fullWord.substring(0, prev.length + 1)
      );

      if (!isDeleting && currentWord === fullWord) {
        setIsDeleting(true);
        setTypingSpeed(200);
      } else if (isDeleting && currentWord === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        setTypingSpeed(200);
      } else if (isDeleting) {
        setTypingSpeed(100);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentWord, isDeleting, typingSpeed, wordIndex]);

  return (
    <section id="hero" className={`hero section ${activeSection === 'hero' ? 'active' : ''}`}>
      <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> 
      <dotlottie-player 
        src="https://lottie.host/8534f3f5-11e4-462e-acaf-4c172ed8b8b8/piiDlJhwvl.json" 
        background="transparent" 
        speed="1" 
        loop 
        autoplay 
      />
      <div className="container" data-aos="zoom-out">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <h1>MOHAMED TLILI</h1>
            <p>
              I'm <span className="typed">{currentWord}</span>
              <span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span>
            </p>
            <div className="social-links">
              <a href="https://www.facebook.com/mohamed.tliliiiii/" aria-label="Facebook Profile">
                <FaFacebook />
              </a>
              <a href="https://github.com/MohamedTlilii?tab=repositories" aria-label="GitHub Profile">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/mohamed-tlili-/" aria-label="LinkedIn Profile">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
