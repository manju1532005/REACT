import React, { useState, useMemo } from 'react';

const SquareCalculator = () => {
  const [number, setNumber] = useState(0);

  // useMemo hook to memorize the square calculation
  const squaredNumber = useMemo(() => {
    console.log('Recalculating square...');
    return number ** 2;
  }, [number]); // Recalculate only when number changes

  const handleInputChange = (event) => {
    setNumber(Number(event.target.value));
  };

  return (
    <div>
      <h2>Square Calculator</h2>
      <input
        type="number"
        value={number}
        onChange={handleInputChange}
        placeholder="Enter a number"
      />
      <p>The square of {number} is: {squaredNumber}</p>
    </div>
  );
};

export default SquareCalculator;