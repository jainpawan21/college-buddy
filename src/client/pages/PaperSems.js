import React, {Component} from 'react'
import { Container, Row, Col, Label, Input, Card, CardBody, CardText, Button} from 'reactstrap';
import axios from './../constants/axios'
class PaperSems extends Component{

  state = {
    data: [],
    sem: '',
    branch: this.props.match.params.branch,
    error : ''
  }

  handleChange = async (e) => {
    await this.setState({
      sem: e.target.value,
    })
    this.handleSubmit()
  }
  handleSubmit = () => {
    axios.post('display',{
      branch: this.state.branch,
      sem: this.state.sem
    })
    .then((res) => {
      console.log(res)
      this.setState({
        data : res.data.papers,
        error : ''
      })
      if(res.data.papers.length === 0){
        this.setState({
          error: 'Not Found'
        })
      }
    })
    .catch((err) => console.log(err.response)) 
  }
  render() {
  return (
    <div>
      <>
      <Container className="mt-3">
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
      </Container>
      
      {this.state.data && <Container className="mt-2">
        <Row>
        {this.state.data.map((paper => {
          return (
            <Col xs="12" sm="6" className="p-4" key={paper._id}>
              <Card className="shadow" style={{borderRadius: '10px'}}>
              <iframe src={paper.url} height="450" title={paper.subject}></iframe>
                <CardBody className="justify-center">
                  <CardText>Subject : {paper.subject} 
                    <br/>
                    Sem : {paper.sem}
                    <br/>
                    Branch : {paper.branch}
                    
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
      </>
    </div>
  )
  }
}

export default PaperSems
