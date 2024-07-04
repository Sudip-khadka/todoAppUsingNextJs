
import { Task } from "./types";

const baseUrl ="https://retoolapi.dev/49tnpW"

export const getAllToDos = async ():Promise<Task[]> =>{
  
const res = await fetch(`${baseUrl}/todos`,{cache: 'no-store'});
const todos = await res.json();
return todos;
}

export const addTodo = async (todo:Task):Promise<Task>=>{
const res = await fetch(`${baseUrl}/todos`,{
    method:"POST",
    headers:{
        'Content-Type': 'application/json'
    },
    body:JSON.stringify(todo)
})
const newTodo = await res.json();
return newTodo;
}

export const editTodo = async (todo:Task):Promise<Task>=>{
const res = await fetch(`${baseUrl}/todos/${todo.id}`,{
    method:"PUT",
    headers:{
        'Content-Type': 'application/json'
    },
    body:JSON.stringify(todo)
})
const updateTodo = await res.json();
return updateTodo;
}


export const deleteTodo = async (id:string):Promise<void>=>{
await fetch(`${baseUrl}/todos/${id}`,{
    method:"DELETE",
    headers:{
        'Content-Type': 'application/json'
    },
})
}