import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Components
import Mani from './components/Mani.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
	  <Mani />
    </>
  )
}

export default App
