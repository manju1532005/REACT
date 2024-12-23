import React, { useCallback } from 'react';

const Button = () => {
 
  const alertHandler = useCallback(() => {
    alert('Button was clicked!');
  }, []); 

  return (
    <div>
      <button onClick={alertHandler}>Click </button>
    </div>
  );
};

export default Button;
