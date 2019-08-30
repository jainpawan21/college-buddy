import React from 'react'
import {Container,Row,Col, Button, Form, Label, Input, ListGroup, ListGroupItem } from 'reactstrap';

export default function Notes() {

  return (
    <div>
      <Container>
      
      <Form>
        <Row className="form-group">
          <Label for="branch" xs={4} md={2}>Branch</Label>
          <Col xs={8}>
          <Input type="select" name="branch" id="branch" >
            <option>CSE</option>
            <option>ECE</option>
            <option>BT</option>
            <option>ME</option>
          </Input>
          </Col>
        </Row>
        
        
        <Row className="form-group">  
          <Label for="sem" xs={4} md={2}>Semester</Label>
          <Col xs={8}>
          <Input type="select" name="sem" id="sem">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
          </Input>
          </Col>
        </Row>
        
        
        <div className="text-center"> 
        <Button color="info" onClick={(e) => e.preventDefault()}>Submit</Button>
        </div>
      </Form>

      {/* <ListGroup className="mt-4" style={{}}>
        <ListGroupItem tag="a" href="#">Cras justo odio</ListGroupItem>
        <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
        <ListGroupItem tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem tag="a" href="#">Vestibulum at eros</ListGroupItem>
      </ListGroup> */}

      <div style={{textAlign: 'center', marginTop: '30px'}}>
        <h2>Coming Soon .....</h2>
      </div>
      </Container>

    </div>
  )
}
