import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
class DataModal extends React.Component {
  render() {
    return (
      <>
        <Modal show={this.props.show}>
          <Modal.Header closeButton onClick={this.props.close}>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.props.text}</Modal.Body>
          <img src={this.props.image} alt={`${this.props.title} image`} />
          <Modal.Footer>
            <Button onClick={this.props.close}>Close</Button>
            <Button onClick={this.props.close}>Save Changes</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default DataModal;
