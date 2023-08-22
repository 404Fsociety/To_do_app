import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { delete_task, done_task } from '../../JS/Actions/Actions';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import UnpublishedIcon from '@mui/icons-material/Unpublished';
import DoneIcon from '@mui/icons-material/Done';
import './TodoModel.css'
import { Bounce } from 'react-reveal';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import DangerousIcon from '@mui/icons-material/Dangerous';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditTask from '../EditTask/EditTask';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #fff',
  boxShadow: 28,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button color="error" onClick={handleOpen} >Confirm</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 300 }}>
          <p style={{alignContent:"center",textAlign:"center"}}><DeleteForeverIcon style={{color:"green",fontSize:"70px"}}/></p>
          <h2 id="child-modal-title">Task deleted succesfuly</h2>
          <Button onClick={handleClose} color='success'>Go back</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

const TodoModel = ({task}) => {
  
  const dispatch = useDispatch()

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    dispatch(delete_task(task.id))
  };

  return (
    <div>
      <Bounce left>
    <div className='todo_model'>
      {task.isDone?<DoneIcon style={{color:"green"}}/>:null}
      <div className={task.isDone?'todo_model-description-undone':'todo_model-description'}>{task.description}</div>
      <div className='todo_model-buttons'>
        <Button variant="contained" style={{backgroundColor:"rgb(170, 170, 170)"}} onClick={()=>dispatch(done_task(task.id))}>{task.isDone?<CheckCircleIcon/>:<UnpublishedIcon/>}</Button>
        <EditTask task={task}/>
        <Button variant="contained" style={{backgroundColor:"rgb(230, 93, 93)"}} onClick={handleOpen}>
  <DeleteIcon fontSize="medium" />
        </Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box className="first-box" sx={{ ...style, width: 400 }}>
          <p style={{alignContent:"center",textAlign:"center"}}><DangerousIcon style={{color:"red",fontSize:"60px"}}/></p>
          <h2 id="parent-modal-title">Are you sure you want to delete this task</h2>
          <p id="parent-modal-description">
            This item will be deleted immediately. You can't ando this action.
          </p>
          <ChildModal />
        </Box>
      </Modal>
      </div>
    </div>
    </Bounce>
    <div className='divider'></div>
    </div>
  )
}

export default TodoModel