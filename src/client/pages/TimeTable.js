import React, {Component} from 'react'
import {Container,Row,Col, Button, Form, Label, Input, Modal, ModalHeader, ModalBody, Card, CardBody, CardTitle, CardText} from 'reactstrap';
import axios from './../constants/axios'
class TimeTable extends Component{

  state = {
    data: [],
    dataStatus: false,
    branch: '',
    sem: 0,
    time: '',
    sec: '',
    day: '',
    error: ''
  }
  setday(){
    var date = new Date()
    var day = date.getDay();
    let dayName = '';
    switch(day){
     
      case 1 : dayName = 'MON';
                break;
      case 2 : dayName = 'TUE';
                break;
      case 3 : dayName = 'WED';
                break;
      case 4 : dayName = 'THU';
                break;
      case 5 : dayName = 'FRI';
                break;
      default : dayName = '';

    }
    this.setState({
      day: dayName
    })
  }
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
        data: res.data.doc,
        dataStatus: true
      })
      // this.toggle()
    })
    .catch((err) => this.setState({
      error: err.response
    }))
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  componentWillMount(){
    console.log(this.state.data)
    this.setday()
  }
  render() {
  return (
    <div>
      <Container>
      
      <Form>
      <Row className="form-group">  
          <Label for="day" xs={4} md={2}>Day</Label>
          <Col xs={8}>
          <Input type="select" name="day" id="day" value={this.state.day} onChange={(e) => this.handleChange(e) }>
            <option value="" hidden>Select</option>
            <option value="MON">MONDAY</option>
            <option value="TUE">TUESDAY</option>
            <option value="WED">WEDNESDAY</option>
            <option value="THU">THURSDAY</option>
            <option value="FRI">FRIDAY</option>
           
          </Input>
          </Col>
        </Row>
        <Row className="form-group">
          <Label for="branch" xs={4} md={2}>Branch</Label>
          <Col xs={8}>
          <Input type="select" name="branch" id="branch" onChange={(e) => this.handleChange(e)}>
            <option value="" hidden>Select</option>
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
            <option value="" hidden>Select</option>
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
            <option value="" hidden>Select</option>
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
          <Input type="select" name="sec" id="sec" onChange={(e) => this.handleChange(e) }>
            <option value="" hidden>Select</option>
            <option>A</option>
            <option>B</option>
          </Input>
          </Col>
        </Row>
        <div className="text-center"> 
        <Button color="info" onClick={(e) => this.handleSubmit(e)}>Submit</Button>
        </div>
      </Form>
        <Row className="mt-3">
         {this.state.data.length !== 0 && this.state.dataStatus ?
            <Col>
              <Card className="timetable-status" style={{backgroundColor: '#C2F3ED'}}>
                <CardBody>
                  <CardTitle>{this.state.time}</CardTitle>
                  <CardText>{this.state.data[0].subject}</CardText>
                  <CardText>{this.state.data[0].room}</CardText>
                  <CardText>{this.state.data[0].teacher}</CardText>
                </CardBody>
              </Card>
            </Col> : this.state.dataStatus === true ?  
            <Col>
              <Card className="timetable-status" style={{backgroundColor: '#C2F3ED'}}>
                <CardBody>
                  <CardText style={{textAlign : 'center'}}>Not Found Choose Any Other</CardText>
                </CardBody>
              </Card>
            </Col> : 
            <div>

            </div>
          }
        </Row>
      </Container>

    </div>
  )
  }
}

export default TimeTable