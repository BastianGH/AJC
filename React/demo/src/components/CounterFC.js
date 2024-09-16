import { useState } from "react";

export default function CounterFC() {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    // count++;
    // console.log(count);
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={onIncrement}>Increment</button>
      <span>{count}</span>
    </div>
  );
}
