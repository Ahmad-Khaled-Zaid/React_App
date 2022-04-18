import React from "react";
// import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
class DropMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choice: {},
    };
  }
  choiceFunction = (e) => {
    console.log(e.target.innerText);
    this.props.hornsNumberFunction(e.target.innerText);
  };
  x = () => {
    this.props.filteredHorns();
  };

  render() {
    return (
      <Dropdown>
        <Dropdown.Toggle
          style={{
            color: "#fff",
            width: "50%",
            background: "green",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          NUMBER OF HORNS
        </Dropdown.Toggle>

        <Dropdown.Menu
          style={{ width: "600px" }}
          onMouseOver={this.choiceFunction}
          onClick={this.x}
        >
          <Dropdown.Item href="#/action-1">show all beasts</Dropdown.Item>
          <Dropdown.Item href="#/action-1">1</Dropdown.Item>
          <Dropdown.Item href="#/action-2">2</Dropdown.Item>
          <Dropdown.Item href="#/action-3">3</Dropdown.Item>
          <Dropdown.Item href="#/action-3">100</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}
export default DropMenu;
