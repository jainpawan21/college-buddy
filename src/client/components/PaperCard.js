import React from 'react';
import { Card, CardImg,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const  PaperCard = (props) => {
  return (
    <div>
      <Card body>
      
          <CardImg width="100%" src={require('../constants/photo.jpeg')} alt="Card image cap" />
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <Button>Do Something</Button>
        
        {/* <CardBody>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink>
        </CardBody> */}
        
      </Card>
    </div>
  );
};

export default PaperCard;