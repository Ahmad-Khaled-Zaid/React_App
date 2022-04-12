import React from "react";
import Child from "./Child";
import data from "../assest/data.json";

class Parent extends React.Component {
  state = {
    votes: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  };

  addVoted = (event) => {
    this.setState({
      votes: this.state.votes[parseInt(event.target.id)] ,
    });
    console.log(this.state.votes);
  };

  render() {
    return data.map((value, index) => (
      <Child
        title={value.title}
        text={value.description}
        image={value.image_url}
        btn={this.addVoted}
        vote={this.state.votes[index]}
        idx={index}
      />
    ));
  }
}
export default Parent;
