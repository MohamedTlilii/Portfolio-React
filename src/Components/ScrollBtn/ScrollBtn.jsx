import React, { useEffect, useState } from 'react';
import './style.css';

function ScrollBtn() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {showButton && (
        <div
          id="scroll-top"
          className="scroll-top"
          aria-label="Scroll to top"
          onClick={scrollToTop}
        >
          <i className="bi bi-arrow-up-short"></i>
        </div>
      )}
    </div>
  );
}

export default ScrollBtn;
