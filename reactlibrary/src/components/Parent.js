import React from "react";
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
    alert(this.state.increase);

  };

  print = () => {
    console.log("hello");
  };
  render() {
    return (
      <div>
        <Child
          title="ahmad"
          text="testtesttesttesttesttesttesttesttesttesttesttesttesttesttest"
          clickFunction={this.addOne}
          counter={this.state.increase}
        />
      </div>
    );
  }
}
export default Parent;
