import React, { useEffect, useState } from 'react';
import './style.css';

function ScrollBtn() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
<<<<<<< HEAD
      setShowButton(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    
=======
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

>>>>>>> f8defd08c92549671aba33660daee2f51eec006f
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
<<<<<<< HEAD
          aria-label="Scroll to top"
=======
          style={{ position: 'fixed', bottom: '20px', right: '20px', backgroundColor: 'yellow', color: 'black', padding: '10px', borderRadius: '50%', cursor: 'pointer' }}
>>>>>>> f8defd08c92549671aba33660daee2f51eec006f
          onClick={scrollToTop}
        >
          <i className="bi bi-arrow-up-short"></i>
        </div>
      )}
    </div>
  );
}

export default ScrollBtn;
