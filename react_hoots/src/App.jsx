import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState('huzaifa');

  const changthis =()=>{
setCount('huzaifa welocm');

  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={changthis}>click</button>
    </>
  )
}

export default App
