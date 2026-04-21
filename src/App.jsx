import { useState } from 'react'
import './App.css'
import Board from './Board'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
         <Board/>
      </section>
    </>
  )
}

export default App
