// withPopInAnimation.js

import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import './withPopInAnimation.css'; // Import the CSS for the animation
=======
>>>>>>> f8defd08c92549671aba33660daee2f51eec006f

const withPopInAnimation = (WrappedComponent) => {
  return (props) => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
<<<<<<< HEAD
      const timeoutId = setTimeout(() => {
        setAnimate(true);
      }, 0); // Delay the animation for a brief moment

      return () => clearTimeout(timeoutId); // Cleanup function
=======
      setAnimate(true);
>>>>>>> f8defd08c92549671aba33660daee2f51eec006f
    }, []);

    return (
      <div className={`pop-in ${animate ? 'animate' : ''}`}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withPopInAnimation;
