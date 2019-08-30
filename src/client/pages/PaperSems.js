import React, {Component} from 'react'
import { Container, Row, Col, Label, Input, Card, CardBody,CardImg, CardImgOverlay, CardText, Button} from 'reactstrap';
import axios from './../constants/axios'
class PaperSems extends Component{

  state = {
    data: [],
    sem: '',
    branch: '',

  }

  handleSubmit = (e) => {
    this.setState({
      sem: e.target.value,
      branch: this.props.match.params.branch
    })
    axios.post('display',{
      branch: this.state.branch,
      sem: this.state.sem
    })
    .then((res) => {
      this.setState({
        data : res.data.papers
      })
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
          <Input type="select" name="sem" id="sem" onChange={(e) => this.handleSubmit(e)}>
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
            <Col xs="6" sm="4" className="p-4">
              <Card className="shadow" style={{borderRadius: '10px'}}>
                <CardImg top src={require('../constants/papers-cse.jpg')}></CardImg>
                <CardBody className="justify-center">
                  <CardText>Subject : {paper.subject} 
                    <br/>
                    Sem : {paper.sem}
                    <br/>
                    Branch : {paper.branch}
                    <br/>
                    <div style={{textAlign: 'center'}} >
                      <Button className="bg-info p-1" href={paper.url}>View in Drive</Button>
                    </div>  
                  </CardText>
                  
                </CardBody>
              </Card>
            </Col>
          )
        }))
      }
      </Row>
      </Container>
      }
      </>
    </div>
  )
  }
}

export default PaperSems
