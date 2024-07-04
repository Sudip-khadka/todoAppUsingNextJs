"use client";

import React, { FormEventHandler, useState } from 'react'
import { FaPlus } from "react-icons/fa";
import Modal from './Modal';
import { addTodo } from '../../../api';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';


const AddTask = () => {
  const [modalOpen,setModalOpen]= useState<boolean>(false);
  const [newTaskValue,setNewTaskValue] = useState<string>('');
  const [editModal,setEditModal] = useState()
  const router =useRouter();
  const handelSubmit: FormEventHandler<HTMLFormElement> =async (e)=>{
    e.preventDefault();
    await addTodo({
      id:uuidv4(),
      text:newTaskValue
    })
    setNewTaskValue('')
    setModalOpen(false)
    router.refresh();
  }
  return (
    <div>
      <button className='btn btn-primary w-full text-white my-5' onClick={()=>setModalOpen(true)}>Add New Task <FaPlus/></button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        
        <form onSubmit={handelSubmit}> 
          <h3 className='font-bold text-lg'>Add New Task</h3>
          <div className="modal-action">
            <input value={newTaskValue} onChange={(e)=>setNewTaskValue(e.target.value)} type="text" placeholder='Enter Your Task' className='input input-bordered w-full' />
            <button type='submit' className='btn btn-primary'>Submit</button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default AddTask
