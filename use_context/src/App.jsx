import { useState } from "react";
import "./App.css";
import { createContext } from "react";
import ChildA from "./components/ChildA";

// 1 create a context
// const UserContext = createContext();
//2 wrap all the child inside a provider

const TheamContext = createContext();

function App() {
  // const [user, setUser] = useState({ namee: "Nandan" });
  // 3 pass the value

  const [theme, setTheme] = useState("light");
  return (
    <TheamContext.Provider value={{theme, setTheme}}>
      <div id="container" style={{backgroundColor:theme==='light' ? "red":"black"}}>
        <ChildA />
      </div>
    </TheamContext.Provider>

    // <>
    //   <UserContext.Provider value={user}>
    //     <ChildA />
    //   </UserContext.Provider>
    // </>
  );
}

export default App;
// export {UserContext}
export { TheamContext };

//test bro
