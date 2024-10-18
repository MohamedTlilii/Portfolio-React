// withPopInAnimation.js

import React, { useEffect, useState } from 'react';
import './withPopInAnimation.css'; // Import the CSS for the animation

const withPopInAnimation = (WrappedComponent) => {
  return (props) => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setAnimate(true);
      }, 0); // Delay the animation for a brief moment

      return () => clearTimeout(timeoutId); // Cleanup function
    }, []);

    return (
      <div className={`pop-in ${animate ? 'animate' : ''}`}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withPopInAnimation;
