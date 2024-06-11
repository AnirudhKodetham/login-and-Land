import React from 'react';
import Modal from 'react-modal';
import './BillModal.css';

const BillModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="Modal"
      overlayClassName="Overlay"
    >
      <div className="modal-header">
        <h2>Bill</h2>
        <button className="close-button" onClick={onRequestClose}>×</button>
      </div>
      <div className="modal-body">
        <p>Items cost: $20</p>
        <p>GST: $2</p>
        <p>Delivery charge: $5</p>
        <h3>Grand total: $27</h3>
      </div>
      <div className="modal-footer">
        <button className="payment-button" onClick={onRequestClose}>Complete Payment</button>
      </div>
    </Modal>
  );
};

export default BillModal;
