import React, { use, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cell from './Cell';
import getQueenPositions from './placements'

const Board = (props) => {
     const { inp } = props;

     if(inp < 4) {
          return <>No Valid Board Solutions for this size</>
     }

     if (inp > 11) {
          return <>Board size too large to compute solutions</>
     }

     const response = getQueenPositions(inp);
     const [rowLineState, setRowLineState] = useState(new Array(inp).fill(0));
     const [colLineState, setColLineState] = useState(new Array(inp).fill(0));
     const [positionsState, setPositionsState] = useState(response[0]);


     useEffect(() => {
          setRowLineState(new Array(inp).fill(0));
          setColLineState(new Array(inp).fill(0));
          setPositionsState(response[0]);
     }, [inp]);

     function RowLine(props) {
          const { rowval } = props;
          const classColor = rowval % 2 == 0 ? true : false;
          return (
               <div className='row'>
                    {rowLineState.map((i, col) => (
                         <Cell key={col} classVal={col % 2 == 0 ? classColor ? 'beige' : 'black' : classColor ? 'black' : 'beige'} showQueen={positionsState && positionsState[rowval] && positionsState[rowval][col] == 'Q'} />
                    ))}
               </div>
          )
     }

     return (
          <Container fluid className='col'>
               <br />
               {colLineState.map((inp, index) => (
                    <RowLine key={index} rowval={index} />
               ))}
          </Container>)
}

export default Board;