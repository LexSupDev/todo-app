//import { useState } from 'react'
import { useState } from "react";
import "./App.css";

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
    setTodoList(todoList.map(el => {
      if (el.id === id) {
        el.taskName = updateTaskName
        setUpdateTask(null)
      }
      return el
    }))
  }

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
      <div className="flex flex-col w-150 bg-gray-700 p-15 border-indigo-500 rounded-md border border-solid">
        <h1 className="text-xl font-bold text-center">Список задач</h1>
        <div className="row flex flex-row justify-center mt-10">
          <input
            value={inputValue}
            onChange={inputHandler}
            type="text"
            className="border-indigo-500 rounded-md border-2 border-solid w-full"
          />
          <button
            className="bg-indigo-500 rounded-md ml-2 size-8 font-bold hover:bg-indigo-800"
            onClick={addTaskHandler}
          >
            +
          </button>
        </div>
        <div className="row justify-start mt-10 flex flex-col">
          <h3>Tasks to do - {todoList.length}</h3>
          {todoList.map((el) => (
            <div className="bg-[#15101C] w-full flex flex-row justify-between p-5 mt-4 rounded-md">
              {updateTask === el.id ? (
                <input
                  className="border-indigo-500 rounded-md border-1 border-solid bg-gray-800 w-full mr-3 pl-2"
                  value={updateTaskName}
                  onChange={(e) => setUpdateTaskName(e.target.value)}
                ></input>
              ) : (
                <p>{el.taskName}</p>
              )}
              <div className="flex">
                {updateTask === el.id ? (
                  <button className="mr-2" onClick={() => changeName(el.id)}>
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7.414A2 2 0 0 0 20.414 6L18 3.586A2 2 0 0 0 16.586 3H5Zm10 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7V5h8v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                ) : (
                  <button
                    onClick={() => editTaskHandler(el.id, el.taskName)}
                    className="mr-2"
                  >
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.32 6.176H5c-1.105 0-2 .949-2 2.118v10.588C3 20.052 3.895 21 5 21h11c1.105 0 2-.948 2-2.118v-7.75l-3.914 4.144A2.46 2.46 0 0 1 12.81 16l-2.681.568c-1.75.37-3.292-1.263-2.942-3.115l.536-2.839c.097-.512.335-.983.684-1.352l2.914-3.086Z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M19.846 4.318a2.148 2.148 0 0 0-.437-.692 2.014 2.014 0 0 0-.654-.463 1.92 1.92 0 0 0-1.544 0 2.014 2.014 0 0 0-.654.463l-.546.578 2.852 3.02.546-.579a2.14 2.14 0 0 0 .437-.692 2.244 2.244 0 0 0 0-1.635ZM17.45 8.721 14.597 5.7 9.82 10.76a.54.54 0 0 0-.137.27l-.536 2.84c-.07.37.239.696.588.622l2.682-.567a.492.492 0 0 0 .255-.145l4.778-5.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                )}
                <button onClick={() => doneTaskHandler(el.id)} className="mr-2">
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 11.917 9.724 16.5 19 7.5"
                    />
                  </svg>
                </button>
                <button onClick={() => deleteTaskHandler(el.id)}>
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="row justify-start mt-10 flex flex-col">
          <h3>Done - {doneTasksList.length}</h3>
          {doneTasksList.map((el) => (
            <div className="bg-[#15101C] w-full flex flex-row justify-between p-5 mt-4 rounded-md">
              <p className="line-through">{el.taskName}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
