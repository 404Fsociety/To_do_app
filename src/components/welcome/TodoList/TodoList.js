import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import TodoModel from '../../TodoModel/TodoModel'
import Dropdown from 'react-bootstrap/Dropdown';

const TodoList = () => {

  const  list = useSelector((state)=>state.listTasks)

  const [status,setStatus] = useState('ALL TASKS')
  return (

    <div>
      <div style={{textAlign:"right",paddingRight:"8rem"}}>
       <Dropdown>
      <Dropdown.Toggle style={{background:"transparent",borderColor:"transparent", borderBottomColor:"#FF9924"}} id="dropdown-basic">
        {status}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item value='ALL TASKS' onClick={()=>setStatus('ALL')}>ALL</Dropdown.Item>
        <Dropdown.Item value='Done' onClick={()=>setStatus('Done')}>Done</Dropdown.Item>
        <Dropdown.Item value='Undone' onClick={()=>setStatus('Undone')}>Undone</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
      {
      status === 'Done'?
      list.filter((el)=>el.isDone === true).map((task)=><TodoModel task={task} key={task.id}/>)
      :
      status === 'Undone'?
      list.filter((el)=>el.isDone === false).map((task)=><TodoModel task={task} key={task.id}/>)
      :
      list.map((task)=>
      <TodoModel task={task} key={task.id}/>
       )
      }
    </div>
  )
}

export default TodoList