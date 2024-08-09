// withPopInAnimation.js

import React, { useEffect, useState } from 'react';

const withPopInAnimation = (WrappedComponent) => {
  return (props) => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
      setAnimate(true);
    }, []);

    return (
      <div className={`pop-in ${animate ? 'animate' : ''}`}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withPopInAnimation;
