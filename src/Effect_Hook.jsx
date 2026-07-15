import { useState, useEffect } from "react";

export default function Effect_Hook() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count Changed:", count);
  }, [count]);

  return (
    <div>
      <h1>useEffect Hook Example</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}