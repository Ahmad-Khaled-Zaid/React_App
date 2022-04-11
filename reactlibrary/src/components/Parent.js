import React from "react";
import Cat from "../assest/cat2.jpg";
import Child from "./Child";
class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: 0,
    };
  }

  addOne = () => {
    this.setState({
      increase: this.state.increase + 1,
    });
    console.log(this.state.increase);
  };

  render() {
    return (
      <div>
        <p>I'm the parent {this.state.increase}</p>
        <img src={Cat} alt={Cat}></img>
        <Child in increaseChild={this.state.increase} />
        <button onClick={this.addOne}>click me</button>
      </div>
    );
  }
}
export default Parent;
