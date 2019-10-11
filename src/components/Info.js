import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

const Info = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="20%" src={props.item.image} alt="Card image cap" />
        <CardBody>
          <CardTitle>Name: {props.item.name}</CardTitle>
          <CardSubtitle>Staus: {props.item.status}</CardSubtitle>
          <CardText>Last Location: {props.item.location.name}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Info;