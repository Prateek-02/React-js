// Counter.js (as a functional component)
import React, { useState } from "react";

function Usecounter({ initialValue = 0 }) {
    const [count, setCount] = useState(initialValue);

    const increment = () => setCount(prevCount => prevCount + 1);
    const decrement = () => setCount(prevCount => Math.max(prevCount - 1, 0));
    const reset = () => setCount(initialValue);

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Usecounter;
