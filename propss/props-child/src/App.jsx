import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Card name="Nandan">
        <h1>Best Web dev</h1>
        <p>Trying to be pro at this</p>
        <p>Hope will complete this soon</p>
      </Card>

    </div>
  )
}

export default App
