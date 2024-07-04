import { getAllToDos } from "../../api";
import AddTask from "./Components/AddTask";
import ToDoList from "./Components/ToDoList";


export default async function Home() {
  const tasks = await getAllToDos();
  console.log(tasks)
  return (
    <main className="max-w-4xl p-10 text-center mx-auto">
      <h1 className="text-blue-500 font-bold">To Do App</h1>
      <p>Using Daisi Ui</p>
      <div className="flex flex-col gap-4 mx-auto">
        <AddTask size={18} className="ml-2"/>
      </div>
      <div>
        <ToDoList tasks={tasks}/>
      </div>
    </main>
  );
}
