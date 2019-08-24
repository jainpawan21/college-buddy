import React from 'react';
import {Container, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

export default class NewsList extends React.Component {
  render() {
    return (
      <Container>
      <ListGroup>
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
      </ListGroup>
      </Container>
    );
  }
}