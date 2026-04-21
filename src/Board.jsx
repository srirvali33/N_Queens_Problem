import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cell from './Cell';
import Form from 'react-bootstrap/Form';
import getQueenPositions from './placements'

const Board = () => {
    const [input, setInput] = useState(8);

    const rowLine= new Array(input).fill(0);
    const colLine= new Array(input).fill(0);
    const positions= getQueenPositions(input)[0];

    const [boardInp, setBoardInp] = useState({rowLine:rowLine, colLine:colLine, positions:positions});
    


     function enterBoard(){
          setBoardInp(
               {rowLine:rowLine, colLine:colLine, positions:positions}
          );
     }
    


    function RowLine(props){
      const {rowval} =props;
      const classColor= rowval%2==0? true: false;
      return (
        <div className='row'>
        {boardInp['rowLine'].map((i, col) => (
             <Cell classVal={col%2==0 ?classColor?'beige':'black':classColor?'black':'beige'} showQueen={boardInp['positions'] && boardInp['positions'][rowval][col]=='Q'}/>
        ))}
        </div>
    )
    }



   return(
    <Container fluid className='col'>
        <Form.Label>Board size entry</Form.Label>
        <Form.Control type="text" placeholder="board size" value={input} onChange={(e)=>setInput(e.target.value)} onEnter={(e)=>enterBoard()}/>
        <br/>
        {boardInp && boardInp['colLine'].map((inp,index) => (
             <RowLine rowval={index}/>
        ))}
   </Container>)
}

export default Board;