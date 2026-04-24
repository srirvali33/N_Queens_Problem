import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cell from './Cell';
import getQueenPositions from './placements'

const Board = (props) => {
     const { inp } = props;

     const [rowLineState, setRowLineState] = useState(new Array(inp).fill(0));
     const [colLineState, setColLineState] = useState(new Array(inp).fill(0));
     const [positionsState, setPositionsState] = useState([]);


     useEffect(() => {
          async function fetchData() {
               const response = await getQueenPositions(inp);
               setRowLineState(new Array(inp).fill(0));
               setColLineState(new Array(inp).fill(0));
               setPositionsState(response[0]);
          }
          fetchData();

     }, [inp]);


     console.log("positionsState", positionsState);


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

     if (rowLineState.length <= 3) {
          return <>No Valid Board Solutions for now</>
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