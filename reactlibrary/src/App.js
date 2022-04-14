import React from "react";
import Parent from "./components/Parent";
import "bootstrap/dist/css/bootstrap.min.css";
import DataModal from "./components/Modal";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      modalTitle: "",
      modalText: "",
      modalImage: "",
    };
  }

  handleClose = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  modalInfo = (modalTitle, modalImage, modalText) => {
    this.setState({
      modalTitle: modalTitle,
      modalText: modalText,
      modalImage: modalImage,
    });
  };

  render() {
    return (
      <div>
        <Parent
          handleCloseParent={this.handleClose}
          modalInfo={this.modalInfo}
        />
        <DataModal
          show={this.state.show}
          close={this.handleClose}
          title={this.state.modalTitle}
          text={this.state.modalText}
          image={this.state.modalImage}
        />
      </div>
    );
  }
}
export default App;
