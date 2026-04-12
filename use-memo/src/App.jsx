import { useState } from "react";
import "./App.css";
import { useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function exp_task(num) {
    console.log("inside exp")
    for (let i = 0; i <= 10000000; i++) {}
    return num * 2;
  }

  // let dvalue = exp_task(input)

  let dvalue = useMemo(() => exp_task(input), [input])

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <div>Count: {count}</div>

      <div>
        Double: {dvalue}
      </div>

      <input type="number" placeholder="Enter number" value={input} onChange={(e) => setInput(e.target.value)} />
    </>
  );
}

export default App;
