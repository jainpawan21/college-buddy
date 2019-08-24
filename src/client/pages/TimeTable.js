import React from 'react'
import {Container,  Button, Form, FormGroup, Label, Input} from 'reactstrap';

class TimeTable extends React.Component {
  render(){

  return (
    <div>
      <Container>
      
      <Form>
        <FormGroup>
          <Label for="branch">Branch</Label>
          <Input type="select" name="branch" id="branch">
            <option>CSE</option>
            <option>ECE</option>
            <option>BT</option>
            <option>ME</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="sem">Semester</Label>
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
        </FormGroup>
        <FormGroup>
          <Label for="time">Select</Label>
          <Input type="select" name="time" id="time">
            <option>9:00-9:55</option>
            <option>9:55-10:50</option>
            <option>10:50-11:45</option>
            <option>11:45-12:40</option>
            <option>12:40-2:00</option>
            <option>2:00-2:55</option>
            <option>2:55-3:50</option>
            <option>3:50-4:45</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="section">Select</Label>
          <Input type="select" name="section" id="section">
            <option>A</option>
            <option>B</option>
          </Input>
        </FormGroup>
        <div className="text-center"> 
        <Button color="info" onClick={(e) => {e.preventDefault()}}>Submit</Button>
        </div>
      </Form>
      
      </Container>

    </div>
  )
  }
}

export default TimeTable