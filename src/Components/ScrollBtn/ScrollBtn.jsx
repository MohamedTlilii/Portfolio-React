import React, { useEffect, useState } from 'react';
import './style.css';

function ScrollBtn() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
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
          style={{ position: 'fixed', bottom: '20px', right: '20px', backgroundColor: 'yellow', color: 'black', padding: '10px', borderRadius: '50%', cursor: 'pointer' }}
          onClick={scrollToTop}
        >
          <i className="bi bi-arrow-up-short"></i>
        </div>
      )}
    </div>
  );
}

export default ScrollBtn;
