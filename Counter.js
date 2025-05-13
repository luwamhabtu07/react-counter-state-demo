import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const incrementAfterDelay = () => {
    setTimeout(() => {
      setCount(prevCount => prevCount + 1);
    }, 2000);
  };

  const incrementTwice = () => {
    // Demonstrates batching issue: may only increment by 1
    setCount(count + 1);
    setCount(count + 1);
  };

  const correctIncrementTwice = () => {
    // Correct way using updater function
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={incrementAfterDelay}>Increment After Delay</button>
      <button onClick={incrementTwice}>Increment Twice</button>
      <button onClick={correctIncrementTwice}>Correct Increment Twice</button>
    </div>
  );
}

export default Counter;
