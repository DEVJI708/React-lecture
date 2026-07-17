//mounting,updating,unmounting with example
import { useState, useEffect } from "react";

export default function Life_cycle() {
  const [count, setCount] = useState(0);

  // Mounting + Unmounting
  useEffect(() => {
    console.log("✅ Component Mounted");

    return () => {
      console.log("❌ Component Unmounted");
    };
  }, []);

  // Updating
  useEffect(() => {
    console.log("🔄 Count Updated:", count);
  }, [count]);

  // Count automatically increase every 1 second
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>useEffect Example</h1>
      <h2>Count: {count}</h2>
    </div>
  );
}