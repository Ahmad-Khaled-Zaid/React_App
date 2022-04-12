import React from "react";
import Child from "./Child";
import data from "../assest/data.json";

class Parent extends React.Component {
 

  render() {
    return (
      <div>
        {data.map((Beast) => {
          return (
            <Child
              title={Beast.title}
              text={Beast.description}
              image={Beast.image_url}
            />
          );
        })}
      </div>
    );
  }
}
export default Parent;
