import React from 'react'
import PaperCard from '../components/PaperCard'
import { Container, Row, Col, Card, CardHeader, CardBody,
  CardImg } from 'reactstrap';
export default function Paper() {
  return (
    <div>
      <Container >
        <Row>
          <Col sm="4" className="p-4">
            <Card className="shadow" style={{borderRadius: '10px'}}>
              <CardImg top src={require('../constants/photo.jpeg')}></CardImg>
              <CardBody className="justify-center">
              <h6>Computer Science Engineering
              </h6>
                
              </CardBody>
            
            </Card>
          </Col>
          <Col sm="4" className="p-4">
            <Card className="shadow" style={{borderRadius: '10px'}}>
              <CardImg top src={require('../constants/photo.jpeg')}></CardImg>
              <CardBody className="justify-center">
              <h6>Electronics Communication Engineering
              </h6>
                
              </CardBody>
            
            </Card>
          </Col>
          <Col sm="4" className="p-4">
          <Card className="shadow" style={{borderRadius: '10px'}}>
            <CardImg top src={require('../constants/photo.jpeg')}></CardImg>
            <CardBody className ="justify-center">
            <h6>Mechanical Engineering
            </h6>
              
            </CardBody>
           
          </Card>
        </Col>
        <Col sm="4" className="p-4">
          <Card className="shadow" style={{borderRadius: '10px'}}>
            <CardImg top src={require('../constants/photo.jpeg')}></CardImg>
            <CardBody className = "justify-center">
            <h6>Biotechnology Engineering
            </h6>
              
            </CardBody>
           
          </Card>
        </Col>
        </Row>
      </Container>
 
      
    </div>
  )
}
