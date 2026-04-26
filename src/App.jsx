import { useState, useEffect } from 'react'
import './App.css'
import Form from 'react-bootstrap/Form';
import Board from './Board';
import { useBoardSize } from './store/boardSizeStore';

function App() {
  const board = useBoardSize((state) => state.boardSize);
  const [input, setInput] = useState(board);
  const [loadBoard, setLoadBoard] = useState(false);
  const changeBoardSize = useBoardSize((state) => state.updateBoardSize);

  function updateLoadBoard(e) {
    setLoadBoard(true);
    e.preventDefault();
    changeBoardSize(input);
    setTimeout(() => {
      setLoadBoard(false);
    }, 1000);
  };

    if (loadBoard) {
    return <>Loading...</>
  };

  return (
    <>
      <Form.Label>Board size entry to place</Form.Label>
      <Form.Control type="number" placeholder="board size" value={input} onChange={(e)=> setInput(e.target.value)}
        style={{width: '15%', 'margin': '0 auto 1px 42%'}}
        />
      <button onClick={(e) => updateLoadBoard(e)} style={{width: '15.5%', 'marginLeft': '42%'}}>Submit</button>
      { (
        <section id="center">
          {board && !loadBoard && <Board inp={parseInt(board)} />}
        </section>
      )}
    </>
  )
}

export default App
