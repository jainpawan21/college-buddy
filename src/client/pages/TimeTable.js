import React, {Component} from 'react'
import {Container,Row,Col, Button, Form, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';
import axios from './../constants/axios'
class TimeTable extends Component{

  state = {
    data: [],
    modal: false,
    branch: '',
    sem: 0,
    time: '',
    sec: 'B',
    day: 'MON',
    error: ''
  }
  // setday(){
  //   var date = new Date()
  //   var day = date.getDay();
  //   switch(day){
  //     case 0 : this.setState({
  //       day: 'MON'
  //     })
  //   }
  // }
  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('search', {
      branch: this.state.branch,
      sem: this.state.sem,
      sec: this.state.sec,
      time: this.state.time,
      day: this.state.day
    })
    .then((res)=> {
      console.log(res.data.doc)
      this.setState({
        data: res.data.doc
      })
      this.toggle()
    })
    .catch((err) => this.setState({
      error: err.response
    }))
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
  return (
    <div>
      <Container>
      
      <Form>
        <Row className="form-group">
          <Label for="branch" xs={4} md={2}>Branch</Label>
          <Col xs={8}>
          <Input type="select" name="branch" id="branch" onChange={(e) => this.handleChange(e)}>
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
          <Input type="select" name="sem" id="sem" onChange={(e) => this.handleChange(e)}>
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
        
        <Row className="form-group">  
          <Label for="time" xs={4} md={2}>Time</Label>
          <Col xs={8}>
          <Input type="select" name="time" id="time" onChange={(e) => this.handleChange(e) }>
            <option>09:00-09:55</option>
            <option>09:55-10:50</option>
            <option>10:50-11:45</option>
            <option>11:45-12:40</option>
            <option>12:40-02:00</option>
            <option>02:00-02:55</option>
            <option>02:55-03:50</option>
            <option>03:50-04:45</option>
          </Input>
          </Col>
        </Row>
        <Row className="form-group">  
          <Label for="section" xs={4} md={2}>Section</Label>
          <Col xs={8}>
          <Input type="select" name="section" id="section" onChange={(e) => this.handleChange(e) }>
            <option>A</option>
            <option>B</option>
          </Input>
          </Col>
        </Row>
        <div className="text-center"> 
        <Button color="info" onClick={(e) => this.handleSubmit(e)}>Submit</Button>
        </div>
      </Form>

      {this.state.data && <Modal isOpen={this.state.modal} toggle={this.toggle} >
          <ModalHeader toggle={this.toggle}>{this.state.time}</ModalHeader>
          <ModalBody>
            Subject :- {typeof(this.state.data.subject)}
            Room No :- {this.state.data.room}
            Teacher :- {this.state.data.teacher} 
          </ModalBody>
         
        </Modal> }
      </Container>

    </div>
  )
  }
}

export default TimeTable