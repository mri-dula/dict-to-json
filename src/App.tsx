import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Converter from './components/Converter'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Converter></Converter>
    </>
  )
}

export default App
