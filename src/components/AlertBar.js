import React, { useState } from 'react';
import './alertBar.css'

const AlertBar = ({ message, onClose }) => {
  const [closed, setClosed] = useState(false);

  const handleClose = () => {
    setClosed(true);
    onClose();
  };

  if (closed) {
    return null; // Don't render if closed
  }

  return (
    <div className="alert-bar">
      <span>{message}</span>
      <button className="close-button" onClick={handleClose}>
        X
      </button>
    </div>
  );
};

export default AlertBar;
