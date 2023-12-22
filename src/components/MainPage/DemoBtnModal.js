import React from "react";
import { Modal, Button } from "react-bootstrap";

const DemoBtnModal = ({ onClose, videoId, showModal }) => {
  return (
    <Modal show={showModal} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Modal Title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <iframe
          width="100%"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube Video Player"
          allowFullScreen
        ></iframe>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DemoBtnModal;
