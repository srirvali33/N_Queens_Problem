import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import queen from './assets/chess-queen-regular.png';

const Cell = (props) => {

    const {classVal, showQueen} = props;
    const classValue='cell '+classVal;

    

   return(
      <div className={classValue}>
         {showQueen &&<img src={queen} height={'50px'} width={'50px'} style={{'margin-top':'20px'}}/>}
      </div>
   )
}

export default Cell;