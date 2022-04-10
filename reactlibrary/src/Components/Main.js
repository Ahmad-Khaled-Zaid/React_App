import React from "react";
import HornedBeast from "./HornedBeast";
import Cat from "../assest/cat2.jpg";
class Main extends React.Component {
  render() {
    return (
      <main>
        <HornedBeast
          title="Horned Beast One"
          description="HHHHHHHHHHHHHHHHHHHHHHHHHHH"
          image="https://www.drivethrurpg.com/images/11262/328856.jpg"
        />
        <HornedBeast
          title="Horned Beast One"
          description="HHHHHHHHHHHHHHHHHHHHHHHHHHH"
          image="https://www.drivethrurpg.com/images/11262/328856.jpg"
        />
        <img src={Cat} alt="cat" />
      </main>
    );
  }
}
export default Main;
