import React from "react";
import Card from "react-bootstrap/Card";
class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0,
    };
  }

  addVotes = () => {
    this.setState({
      votes: this.state.votes + 1,
    });
    this.props.showAlert();
    this.props.getModalData(this.props.title);
  };

  render() {
    return (
      <div>
        <Card
          style={{ width: "20rem", margin: "10px", border: "solid black 2px" }}
        >
          <Card.Img onClick={this.addVotes} src={this.props.image} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Card.Text>Number of horns {this.props.hornesNumber}</Card.Text>

            <Card.Text>{this.state.votes}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default HornedBeast;
