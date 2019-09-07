import React,{Component} from 'react'
import {Container,Row,Col, Button, Form, Label, Input, Card, CardBody, CardText} from 'reactstrap';
import axios from './../constants/axios'
export default class Notes extends Component {

  state={
    notesData: [],
    branch: '',
    sem: '',
    error: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  getNotes = (e) => {
    e.preventDefault();
    axios.post('displaynotes',{
      branch: this.state.branch,
      sem: this.state.sem
    })
    .then((res) => {
      console.log(res)
      this.setState({
        notesData : res.data.notes,
        error : ''
      })
      if(res.data.notes.length === 0){
        this.setState({
          error: 'Not Found'
        })
      }
    })
    .catch((err) => console.log(err.response))

  }
  render(){
  return (
    <div>
      <>
      <Container>
      
      <Form>
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
          <Label for="sem" xs={4} md={2} >Semester</Label>
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
        
        
        <div className="text-center"> 
        <Button color="info" onClick={(e) => this.getNotes(e)}>Submit</Button>
        </div>
      </Form>

      {this.state.notesData && <Container className="mt-2">
        <Row className="mb-4">
        {this.state.notesData.map((notes => {
          return (
            <Col xs="12" sm="6" className="p-4" key={notes._id}>
              <Card className="shadow" style={{borderRadius: '10px'}}>
              <iframe src={notes.url} height="450" title={notes.subject}></iframe>
                <CardBody className="justify-center">
                  <CardText>Subject : {notes.subject} 
                    <br/>
                    Sem : {notes.sem}
                    <br/>
                    Branch : {notes.branch}
                    
                  </CardText>
                  
                </CardBody>
              </Card>
            </Col>
           
          )
        }))
      }
      </Row>
      <Row>
        {this.state.error && 
        <div className="offset-3 col-6" style={{textAlign: 'center'}}>
          <h4>{this.state.error}</h4>
        </div>}
      </Row>
      </Container>
      }
      </Container>
      </>
    </div>
  )
}
}
