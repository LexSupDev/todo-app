//import { useState } from 'react'
import { useState } from "react";
import { Task } from "./Components/Task";
import "./App.css";
import { DoneTask } from "./Components/DoneTask";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [doneTasksList, setDoneTasksList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [updateTask, setUpdateTask] = useState(null);
  const [updateTaskName, setUpdateTaskName] = useState("");

  const editTaskHandler = (id, taskName) => {
    setUpdateTask(id);
    setUpdateTaskName(taskName);
  };

  const changeName = (id) => {
    setTodoList(
      todoList.map((el) => {
        if (el.id === id) {
          el.taskName = updateTaskName;
          setUpdateTask(null);
        }
        return el;
      })
    );
  };

  const addTaskHandler = () => {
    inputValue.trim() &&
      setTodoList([
        ...todoList,
        { taskName: inputValue, id: Date.now(), isCurrentUpdate: null },
      ]);
    setInputValue("");
  };

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const deleteTaskHandler = (id) => {
    setTodoList(todoList.filter((el) => el.id !== id));
  };

  const doneTaskHandler = (id) => {
    setTodoList(todoList.filter((el) => el.id !== id));
    setDoneTasksList([
      ...doneTasksList,
      ...todoList.filter((el) => el.id === id),
    ]);
  };

  return (
    <>
      <div className="flex flex-col w-100 lg:w-150 bg-gray-700 p-15 border-indigo-500 rounded-md border border-solid">
        <h1 className="text-xl font-bold text-center">Список задач</h1>
        <div className="row flex flex-row justify-center mt-10">
          <input
            value={inputValue}
            onChange={inputHandler}
            type="text"
            className="border-indigo-500 rounded-md border-2 border-solid w-full"
          />
          <button
            className="bg-indigo-500 rounded-md ml-2 pb-1.5 pl-2.5 pr-2.5 text-xl font-bold hover:bg-indigo-800"
            onClick={addTaskHandler}
          >
            +
          </button>
        </div>
        <div className="row justify-start mt-10 flex flex-col">
          <h3>Tasks to do - {todoList.length}</h3>
          {todoList.map((el) => (
            <Task
              key={el.id}
              id={el.id}
              taskName={el.taskName}
              updateTaskName={updateTaskName}
              updateTask={updateTask}
              setUpdateTaskName={setUpdateTaskName}
              changeName={changeName}
              editTaskHandler={editTaskHandler}
              doneTaskHandler={doneTaskHandler}
              deleteTaskHandler={deleteTaskHandler}
            />
          ))}
          <div className="row justify-start mt-10 flex flex-col">
            <h3>Done - {doneTasksList.length}</h3>
            {doneTasksList.map((el) => (
              <DoneTask taskName={el.taskName} key={el.id}/>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
