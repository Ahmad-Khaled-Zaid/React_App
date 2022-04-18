import React from "react";
import HornedBeast from "./HornedBeast";
class Main extends React.Component {
  render() {
    return this.props.HornedData.map((Beast) => (
      <HornedBeast
        title={Beast.title}
        description={Beast.description}
        image={Beast.image_url}
        hornesNumber={Beast.horns}
        showAlert={this.props.showAlert}
        getModalData={this.props.getModalData}
      />
    ));
  }
}
export default Main;
