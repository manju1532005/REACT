//1 
import React, { useRef } from 'react';

const ToggleVisibility = () => {
 
  const divRef = useRef(null);

  const toggleVisibility = () => {
    if (divRef.current) {
      divRef.current.style.display = divRef.current.style.display === 'none' ? 'block' : 'none';
    }
  };

  return (
    <div>
      <button onClick={toggleVisibility}>ToggleVisibility</button>
      <div ref={divRef} style={{ display: 'block', marginTop: '20px', padding: '20px', background: '#f0f0f0' }}>
        This is the content that can be toggled.
      </div>
    </div>
  );
};

export default ToggleVisibility;


