import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
class DataModal extends React.Component {
  render() {
    return (
      <div>
        <Modal show={this.props.show} style={{ height: "100%" }}>
          <Modal.Header onClick={this.props.close}>
            <Modal.Title>{this.props.selectedBeasts.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.props.selectedBeasts.description}</Modal.Body>
          <img
            src={this.props.selectedBeasts.image_url}
            alt={this.props.title}
          />

          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.close}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default DataModal;
