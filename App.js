import React, { useState } from 'react';

import Icon from './Component/Icon';

//Toastify 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//reactsrap 
import { Card, CardBody, Container, Button, Col, Row } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'

//App css
import './App.css';



const itemArray = new Array(9).fill("empty")

function App() {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    setIsCross(false)
    setWinMessage("")
    itemArray.fill("empty",0,9)
  }

  const checkIsWinner = () => {
    if (itemArray[0]===itemArray[1] && itemArray[0]===itemArray[2] && itemArray[0]!=="empty") {
      setWinMessage(`${itemArray[0]} Won`)
    }
    else if (itemArray[3]===itemArray[4] && itemArray[3]===itemArray[5] && itemArray[3]!=="empty") {
      setWinMessage(`${itemArray[3]} Won`)
    }
    else if (itemArray[6]===itemArray[7] && itemArray[6]===itemArray[8] && itemArray[6]!=="empty") {
      setWinMessage(`${itemArray[6]} Won`)
    }
    else if (itemArray[0]===itemArray[3] && itemArray[0]===itemArray[6] && itemArray[0]!=="empty") {
      setWinMessage(`${itemArray[0]} Won`)
    }
    else if (itemArray[1]===itemArray[4] && itemArray[1]===itemArray[7] && itemArray[1]!=="empty") {
      setWinMessage(`${itemArray[1]} Won`)
    }
    else if (itemArray[2]===itemArray[5] && itemArray[2]===itemArray[8] && itemArray[2]!=="empty") {
      setWinMessage(`${itemArray[2]} Won`)
      
    }
    else if (itemArray[0]===itemArray[4] && itemArray[0]===itemArray[8] && itemArray[0]!=="empty") {
      setWinMessage(`${itemArray[0]} Won`)

    }
    else if (itemArray[2]===itemArray[4] && itemArray[2]===itemArray[6] && itemArray[2]!=="empty") {
      setWinMessage(`${itemArray[2]} Won`)
      
    }
  }

  const changeItem = itemNumber => {
    if (winMessage) {
      return toast(winMessage,{type:"success"})
    }

    if (itemArray[itemNumber]==="empty") {
      itemArray[itemNumber]=isCross?"Cross":"Circle"
      setIsCross(!isCross)

    }
    else{
      return toast("already Filled",{type:"error"})
    }
    checkIsWinner()
    }
  

  return (
    <div>
      <Container className="p-5">
        <ToastContainer className="bottom-center" />
        <Row>
          <Col md={6} className="offset-md-3">
            {winMessage?(
              <div className="mt-2 mb-2">
                <h1 className="text-success text-center text-uppercase">
                  {winMessage}
                </h1>
                <Button color="success" block onClick={reloadGame}>Reload</Button>
              </div>
            ): (
              <h1 className="text-center text-warning">
                {isCross?"Cross":"Circle"}Turns
              </h1>
            )}
            <div className="grid">
              {
                itemArray.map((item, index) => (
                  <Card color="primary" onClick={()=>changeItem(index)}>
                    <CardBody className="box">
                       <Icon name={item} /> 
                    </CardBody>
                  </Card>
                ))
              }
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
