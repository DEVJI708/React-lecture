import { useState, useEffect, useRef } from "react";

export default function Effect_Hook() {
  const [count, setCount] = useState(0);
  const [quantity, setQuantity] = useState(10);

  const prevCount = useRef(count);

  useEffect(() => {
    if (count > prevCount.current) {
      setQuantity((prev) => Math.max(prev - 1, 0));
    }

    prevCount.current = count;
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <h2>Quantity: {quantity}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
      >
        Decrement
      </button>
    </div>
  );
}