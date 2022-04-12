import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class Child extends React.Component {
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={this.props.image} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.text}</Card.Text>
          <Card.Text>{this.props.vote}</Card.Text>

          <Button id={this.props.idx} onClick={this.props.btn}>
            Pick this Horned Beast
          </Button>
        </Card.Body>
      </Card>
    );
  }
}
export default Child;
