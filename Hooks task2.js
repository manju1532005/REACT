//2

import React, { useState, useEffect, useRef } from 'react';

const Toggle = () => {
  const [isVisible, setIsVisible] = useState(true);
  
  
  const divRef = useRef(null);

  const toggle = () => {
    setIsVisible(prevState => !prevState); 
  };

  useEffect(() => {
    alert('Component has been updated');
  }, [isVisible]); 

  return (
    <div>
      <button onClick={toggle}>Toggle Visibility</button>
      <div
        ref={divRef}
        style={{ display: isVisible ? 'block' : 'none', marginTop: '20px', padding: '20px', background: '#f0f0f0' }}
      >
        This is the content that can be toggled.
      </div>
    </div>
  );
};

export default Toggle;