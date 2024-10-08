import React, { useState, useCallback } from 'react';

function Button({ onClick, children }) {
  console.log(`Rendering button - ${children}`);
  return <button onClick={onClick}>{children}</button>;
}

function Counter() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  // Memoizing the increment function using useCallback
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []); // No dependencies, so function stays the same across renders

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={increment}>Increment</Button>
      <button onClick={() => setOtherState(!otherState)}>Toggle Other State</button>
    </div>
  );
}

export default Counter;
