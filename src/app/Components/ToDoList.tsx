import React from 'react'
import { Task } from '../../../types'
import Tasks from './Tasks'
interface ToDoListProps{
    tasks:Task[]
}

const ToDoList: React.FC<ToDoListProps> = ({tasks}) => {
  return (
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>S.N</th>
        <th>Tasks</th>
        <th colSpan={2} className='text-center'>Actions</th>
      </tr>
    </thead>
    <tbody>
      {tasks.map((task,index)=><Tasks key={task.id} task={task} index={index} />)}
    </tbody>
  </table>
</div>
  )
}

export default ToDoList
