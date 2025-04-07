//import { useState } from 'react'
import { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([])

  const clickHandler = (props) => {
    console.log(props);
  };

  return (
    <>
      <div className="flex flex-col w-150 bg-gray-700 p-15 border-indigo-500 rounded-md border border-solid">
        <h1 className="text-xl font-bold text-center">Список задач</h1>
        <div className="row flex flex-row justify-center mt-10">
          <input
            type="text"
            className="border-indigo-500 rounded-md border border-solid w-full"
          />
          <button
            className="bg-indigo-500 rounded-md ml-2 size-7 hover:bg-indigo-800"
            onClick={clickHandler}
          >
            +
          </button>
        </div>
        <div className="row justify-start mt-10 flex flex-col">
          <h3>Tasks to do - 4</h3>
          <div className="bg-[#15101C] w-full flex flex-row justify-between p-5 mt-4 rounded-md">
            <p>To study React fundamentals</p>
            <div>
              <button>1</button>
              <button>2</button>
            </div>
          </div>
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
