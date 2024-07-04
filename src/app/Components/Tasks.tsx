'use client'
import React, { FormEventHandler, useState } from 'react'
import { Task } from '../../../types'
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import Modal from './Modal';
import { useRouter } from 'next/navigation';
import { deleteTodo, editTodo } from '../../../api';
interface TaskProps {
    task:Task;
    index:number
}

const Tasks: React.FC<TaskProps> = ({task,index}) => {
  const router = useRouter()
  const [modalEdit,setModalEdit] = useState<boolean>(false);
  const [modalDelete,setModalDelete] = useState<boolean>(false);
  const [taskToEdit,setTaskToEdit] = useState<string>(task.text)

  const handelEdit: FormEventHandler<HTMLFormElement> =async (e)=>{
    e.preventDefault();
    await editTodo({
      id:task.id,
      text:taskToEdit
    })
    setTaskToEdit('')
    setModalEdit(false)
    router.refresh();
  }

  const handleDelete = async (id:string)=>{
    await deleteTodo(id)
    setModalDelete(false)
    router.refresh();
  } 
  return (
    <tr key={task.id}>
        <td>{index+1}</td>
        <td>{task.text}</td>
          <td><FiEdit className='text-blue-500' onClick={()=>setModalEdit(true)}/>
          <Modal modalOpen={modalEdit} setModalOpen={setModalEdit}>
        
        <form onSubmit={handelEdit}> 
          <h3 className='font-bold text-lg'>Edit Task</h3>
          <div className="modal-action">
            <input value={taskToEdit} onChange={(e)=>setTaskToEdit(e.target.value)} type="text" placeholder='Enter Your Task' className='input input-bordered w-full' />
            <button type='submit' className='btn'>Save Changes</button>
          </div>
        </form>
      </Modal>
          </td>
          
        <td className='text-red-500'><MdDelete size={25} onClick={()=>setModalDelete(true)} />
        <Modal modalOpen={modalDelete} setModalOpen={setModalDelete}>
        <h3>Are You Sure, You Want To Delete This Task ?</h3>
        <div className="modal-action full-w mx-auto">
          <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded" onClick={()=>handleDelete(task.id)}>Yes</button>
        </div>
      </Modal></td>
      </tr>
  )
}

export default Tasks
