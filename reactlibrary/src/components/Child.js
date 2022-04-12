import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class Child extends React.Component {
  state = {
    votes: 0,
  };

  addVoted = () => {
    this.setState({
      votes: this.state.votes + 1,
    });
  };
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={this.props.image} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.text}</Card.Text>
          <Card.Text>{this.props.vote}</Card.Text>
          <Card.Text>{this.state.votes}</Card.Text>

          <Button  onClick={this.addVoted}>
            Pick this Horned Beast
          </Button>
        </Card.Body>
      </Card>
    );
  }
}
export default Child;
