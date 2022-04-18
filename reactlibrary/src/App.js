import React from "react";
import Data from "./assest/data.json";
import Main from "./components/Main";
import DataModal from "./components/Modal";
import DropMenu from "./components/DropDownMenu";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      HornedData: Data,
      HornedData1: Data,
      show: false,
      selectedBeasts: {},
      hornsNumber: {},
    };
  }

  showAlert = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  hornsNumberFunction = (horns1) => {
    
    horns1 = parseInt(horns1);
    this.setState({
      hornsNumber: horns1,
    });
  };

  filteredHorns = () => {

    if (!isNaN(this.state.hornsNumber)) {
      let x = this.state.HornedData.filter(
        (h) => h.horns === this.state.hornsNumber
      );
      this.setState({
        HornedData1: x,
      });
    } else {
      this.setState({
        HornedData1: this.state.HornedData,
      });
    }
  };

  getModalData = (title) => {
    let newArr = Data.filter((Beast) => title === Beast.title);

    this.setState({
      selectedBeasts: newArr[0],
    });
  };
 
  render() {
    return (
      <div>
        <DropMenu
          hornsNumberFunction={this.hornsNumberFunction}
          filteredHorns={this.filteredHorns}
        />

        <Main
          HornedData={this.state.HornedData1}
          showAlert={this.showAlert}
          getModalData={this.getModalData}
        />
        <DataModal
          show={this.state.show}
          close={this.showAlert}
          selectedBeasts={this.state.selectedBeasts}
        />
      </div>
    );
  }
}
export default App;
