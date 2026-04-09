import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import LogoutBtn from './components/LogoutBtn'
import LoginBtn from './components/LoginBtn'

function App() {
  const[isLoggedIn, setLoggedIn] = useState(false);

  // if else
  // if(isLoggedIn) {
  //   return (
  //     <LogoutBtn />
  //   )
  // } else {
  //   return (
  //     <LoginBtn />
  //   )
  // }

  // ternary operator
  // return (
  //   <div>
  //     {isLoggedIn ? <LogoutBtn /> : <LoginBtn />}
  //   </div>
  // )

  //Logical operator 
  // return (
  //   <div>
  //     <h1>Welcome guys</h1>
  //     <div>
  //       {isLoggedIn && <LogoutBtn />}
  //     </div>
  //   </div>
  // )

  // early return

  if(!isLoggedIn) {
    return (
      <LoginBtn />
    )
  }


}

export default App
