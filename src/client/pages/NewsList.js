import React from 'react';
import {Container, Row, Button, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import {Link} from 'react-router-dom';

export default class NewsList extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          
        </Row>
        <Row className = "mt-3 mb-3">
          <div class="story">
            <figure class="story__shape">
                <img src={require('./../constants/photo.jpeg')} alt="Person on a tour" class="story__img" />
                <figcaption class="story__caption">Mary Smith</figcaption>
            </figure>
            <div class="story__text">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                    ducimus quam nisi exercitationem omnis earum qui. 
                </p>
            </div>
            <div style={{textAlign: 'center'}} >
            <Button className="story-button" href="https://www.google.com">See More</Button>
            </div>
          </div>
        </Row>

        <Row className = "mt-5">
          <div class="story">
            <figure class="story__shape">
                <img src={require('./../constants/photo.jpeg')} alt="Person on a tour" class="story__img" />
                <figcaption class="story__caption">Mary Smith</figcaption>
            </figure>
            <div class="story__text">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                    ducimus quam nisi exercitationem omnis earum qui. 
                </p>
            </div>
            <div style={{textAlign: 'center'}} >
              <Button className="story-button">See More</Button>
            </div>
          </div>
        </Row>

        <Row className = "mt-5">
          <div class="story">
            <figure class="story__shape">
                <img src={require('./../constants/photo.jpeg')} alt="Person on a tour" class="story__img" />
                <figcaption class="story__caption">Mary Smith</figcaption>
            </figure>
            <div class="story__text">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                    ducimus quam nisi exercitationem omnis earum qui. 
                </p>
            </div>
            <div style={{textAlign: 'center'}} >
              <Button className="story-button">See More</Button>
            </div>
          </div>
        </Row>

        <Row className = "mt-5">
          <div class="story">
            <figure class="story__shape">
                <img src={require('./../constants/photo.jpeg')} alt="Person on a tour" class="story__img" />
                <figcaption class="story__caption">Mary Smith</figcaption>
            </figure>
            <div class="story__text">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                    ducimus quam nisi exercitationem omnis earum qui. 
                </p>
            </div>
            <div style={{textAlign: 'center'}} >
              <Button className="story-button">See More</Button>
            </div>
          </div>
        </Row>
        
      {/* <ListGroup>
        <ListGroupItem>
          <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
          <ListGroupItemText>
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.  
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
          <ListGroupItemText>
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.  
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
          <ListGroupItemText>
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
          </ListGroupItemText>
        </ListGroupItem>
      </ListGroup> */}
      </Container>
    );
  }
}