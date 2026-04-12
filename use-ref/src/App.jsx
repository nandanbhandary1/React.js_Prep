import { useState, useEffect } from "react";
import "./App.css";
import { useRef } from "react";

function App() {
  const [count, setCount] = useState(0);

  // let val = 1;
  let val = useRef(0);

  let btnref = useRef()

  function handleIncrement() {
    // val = val + 1; // not persistent so,
    val.current = val.current + 1;
    // console.log(val)
    console.log(val.current);
    setCount(count + 1);
  }

  function changeColor() {
    btnref.current.style.backgroundColor = "red";
  }

  //it runs on every render
  useEffect(() => {
    console.log("I rendered again");
  });

  return (
    <>
      <button ref={btnref}onClick={handleIncrement}>Increment</button>
      <br />
      <button onClick={changeColor}>
        Change Colour of 1st btn
      </button>
      <div>Count: {count}</div>
    </>
  );
}

export default App;
