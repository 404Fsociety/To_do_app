import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Edit_Task } from '../../JS/Actions/Actions';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditTask = ({ task }) => {
  const [show, setShow] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEdit = () => {
    dispatch(Edit_Task(task.id, newDescription));
    handleClose();

    // Show a Snackbar notification
    toast.success('Changes are saved!', {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 2000, // Close after 2 seconds
    });
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleShow}
        style={{ backgroundColor: '#FF9924' }}
      >
        <EditIcon />
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: 'rgb(155, 70, 40)' }}>
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Woohoo, Now you can update your task
          <Form.Control
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="contained"
            style={{ backgroundColor: 'rgb(182, 182, 182)', marginRight: '5px' }}
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            variant="contained"
            style={{ backgroundColor: 'rgb(95, 190, 100)' }}
            onClick={handleEdit}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditTask;
