import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0);
  function handleCount() {
    setCount(count+1)
  }

  return (
    <div>
      <Button incrementCount={handleCount} text="click me">
      <h1>{count}</h1>
      </Button>
      {/* <Card name="Nandan">
        <h1>Best Web dev</h1>
        <p>Trying to be pro at this</p>
        <p>Hope will complete this soon</p>
      </Card>
      <Card children="I am a children">
      </Card> */}

    </div>
  )
}

export default App
