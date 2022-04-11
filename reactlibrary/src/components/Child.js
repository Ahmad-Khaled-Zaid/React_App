import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Cat from "../assest/cat2.jpg";
class Child extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Cat} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.counter}</Card.Text>
            <Card.Text>{this.props.text}</Card.Text>
            <Button onClick={this.props.clickFunction} variant="primary">
              Click Me
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default Child;
