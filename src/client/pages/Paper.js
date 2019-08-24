import React from 'react'
import PaperCard from '../components/PaperCard'
import {Container, Row, Col} from 'reactstrap'
export default function Paper() {
  return (
    <div>
      <Container >
        <Row>
          <Col xs={{ size: 8, offset: 2 }} md={{ size: 3 ,offset: 0}} >
            <PaperCard />
          </Col>
          <Col sm="6" md="4">
            <PaperCard />
          </Col>
          <Col sm="6" md="4">
            <PaperCard />
          </Col>
        </Row>
      </Container>
 
      
    </div>
  )
}
