import { useState, useEffect } from 'react'
import './App.css'
import Form from 'react-bootstrap/Form';
import Board from './Board'



function App() {
  const [input, setInput] = useState(8);
  const [loadingState, setLoadingState] = useState(false);



  function handleInputChange() {
    console.log("handleInputChange", input);
    setLoadingState(true);
    setInput(input);
    setLoadingState(false);
  }

  if (loadingState) {
    return <>Loading...</>
  }

  return (
    <>
      <Form.Label>Board size entry to place</Form.Label>
      <Form.Control type="number" placeholder="board size" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => handleInputChange()}>Submit</button>
      <section id="center">
        {!loadingState && <Board inp={input} />}
      </section>
    </>
  )
}

export default App
