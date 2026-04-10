import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const[count, setCount] = useState(0);
  const [total, setTotal] = useState(1);

  // useEffect(() => {
  //   alert("Hello");
  // });

  // useEffect(() => {
  //   alert("i will run only on first render")
  // }, [])
  
  // useEffect(() => {
  //   alert("I will run everytime when ct is updated")
  // }, [count])
  
  // useEffect(() => {
  //   alert("run when count or total is updated")
  // }, [count, total])

  useEffect(() => {
    alert("Count is updated")
  
    return () => {
      alert("Count is unmount from ui")
    }
  }, [count])
  

  function handlecClick() {
    setCount(count + 1);
  }
  
  function handlecClickTotal () {
    setTotal(total + 1);

  }

  return (
    <>

    <button onClick={handlecClick}>Update Count</button>
      <br />
      Count is: {count}
      <br />
      <button onClick={handlecClickTotal}>Update Total</button>
      <br />
      Total is: {total}
    </>
  );
}

export default App;
