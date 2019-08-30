import React from 'react'
import { Container, Row, Col, Card, CardBody,CardImg } from 'reactstrap';
import { Link } from 'react-router-dom'
export default function Paper({match}) {
  return (
    <div>
      <Container >
        <Row>
        
          <Col sm="4" className="p-4">
          <Link to="/papers/CSE">
            <Card className="shadow" style={{borderRadius: '10px'}}>
              <CardImg top src={require('../constants/papers-cse.jpg')}></CardImg>
              <CardBody className="justify-center">
              <h6>Computer Science Engineering
              </h6>
                
              </CardBody>
            
            </Card>
            </Link>
          </Col>
          
          <Col sm="4" className="p-4">
            <Link to="/papers/ECE">
            <Card className="shadow" style={{borderRadius: '10px'}}>
              <CardImg top src={require('../constants/papers-ece.jpg')}></CardImg>
              <CardBody className="justify-center">
              <h6>Electronics & Communication Engineering
              </h6>
                
              </CardBody>
            </Card>
            </Link>
          </Col>
          <Col sm="4" className="p-4">
            <Link to="/papers/ME">
          <Card className="shadow" style={{borderRadius: '10px'}}>
            <CardImg top src={require('../constants/papers-me.jpg')}></CardImg>
            <CardBody className ="justify-center">
              <h6>Mechanical Engineering</h6>
            </CardBody>
           
          </Card>
          </Link>
        </Col>
        <Link to="/papers/BT">
        <Col sm="4" className="p-4">
          <Card className="shadow" style={{borderRadius: '10px'}}>
            <CardImg top src={require('../constants/papers-bt.jpg')}></CardImg>
            <CardBody className = "justify-center">
            <h6>Biotechnology Engineering
            </h6>
              
            </CardBody>
           
          </Card>
        </Col>
        </Link>
        </Row>
      </Container>
 
      
    </div>
  )
}
