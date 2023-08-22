import React from 'react';
import './addtask.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { useDispatch } from 'react-redux';
import { add_task } from '../../JS/Actions/Actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddTask = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd = () => {
    dispatch(add_task({ id: Math.random(), description, isDone: false }));
    handleClose();

    // Show a success notification
    toast.success('Task added successfully!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: true,
    });
  };

  const [show, setShow] = useState(false);

  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    <div className="add">
      <h1 className="add-title">
        Add new task
        <AddTaskIcon />
      </h1>
      <div className="add-div">
        <Button
          style={{ padding: '7px 50px', backgroundColor: '#B4C9E2', borderStyle: 'hidden' }}
          onClick={handleShow}
        >
          Add
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add new task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control value={description} onChange={(e) => setDescription(e.target.value)} placeholder="new task" />
          </Modal.Body>
          <Modal.Footer>
            <Button
              style={{ padding: '7px 70px', backgroundColor: 'rgb(95, 190, 100)', borderStyle: 'hidden' }}
              onClick={() => handleAdd()}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
    </div>
  );
};

export default AddTask;
