import React, { useState } from 'react';
import { Modal, Spinner } from 'react-bootstrap';
import './CVModal.css';

const CVModal = ({ show, handleClose }) => {
  const [loading, setLoading] = useState(true);
  const API_URL = process.env.REACT_APP_API_URL;

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <Modal 
      show={show} 
      onHide={handleClose} 
      size="xl" 
      centered
      className="cv-modal"
    >
      <Modal.Header closeButton className="bg-dark text-white">
        <Modal.Title>Curriculum Vitae - Maria Jara</Modal.Title>
      </Modal.Header>
      
      <Modal.Body className="p-0" style={{ height: '80vh' }}>
        {loading && (
          <div className="d-flex justify-content-center align-items-center h-100">
            <Spinner animation="grow" style={{ color: '#d00000' }} />
            <span className="ms-3">Generating an updated CV...</span>
          </div>
        )}
        
        <iframe
          src={`${API_URL}/generate-cv`}
          title="CV Preview"
          width="100%"
          height="100%"
          style={{ border: 'none', display: loading ? 'none' : 'block' }}
          onLoad={handleLoad}
        />
      </Modal.Body>
      
    </Modal>
  );
};

export default CVModal;