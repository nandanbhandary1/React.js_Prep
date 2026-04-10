import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    alert("I am clicked!!!!");
  }

  function handleMouse() {
    alert("Overed bhai")
  }

  function handleInput(e) {
    console.log(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    // i m writing my custom behaviour
    alert("Form submit karu???")
  }

  return (
    <div>
      <button onClick={() => alert("Button clicked")}>
        Click meeee
      </button>
      {/* <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput} />
        <button type="submit">Submit</button>
      </form> */}

      <p onMouseOver={handleMouse}>
        I am a para
      </p>

      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
