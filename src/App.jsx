//import { useState } from 'react'
import { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTaskHandler = () => {
    inputValue.trim() && setTodoList([...todoList, inputValue]);
    setInputValue("");
  };

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const deleteTaskHandler = (e) => {
    setTodoList([...todoList].filter( task => task !== e));
  };

  const doneTaskHandler = () => {

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
          <h3>Tasks to do - 4</h3>
          {todoList.map((el) => (
            <div className="bg-[#15101C] w-full flex flex-row justify-between p-5 mt-4 rounded-md">
              <p>{el}</p>
              <div>
                <button onClick={doneTaskHandler} className="mr-2">
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
                <button onClick={() => deleteTaskHandler(el)}>
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
          <h3>Done - 1</h3>
          <div className="bg-[#15101C] w-full flex flex-row justify-between p-5 mt-4 rounded-md">
            <p className="">To study React fundamentals</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
