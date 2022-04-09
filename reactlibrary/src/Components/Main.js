import React from "react";
import HornedBeast from "./HornedBeast";
class Main extends React.Component {
  render() {
      console.log(this.props);
    return (
      <div>
        <HornedBeast
          title="Horned Beast One"
          description="HHHHHHHHHHHHHHHHHHHHHHHHHHH"
          image="https://www.drivethrurpg.com/images/11262/328856.jpg"
        />
        <HornedBeast 
           title="Horned Beast One"
          description="HHHHHHHHHHHHHHHHHHHHHHHHHHH"
          image="https://www.drivethrurpg.com/images/11262/328856.jpg"/>
      </div>
    );
  }
}
export default Main;
