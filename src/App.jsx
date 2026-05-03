import { useState } from "react";
import "./App.css";
import Task from "./components/Task";

export default function App() {
  const [input, setInput] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  const addTask = () => {
    if (input.trim() === '') return

    const newTask = {
      value: input,
      id: Date.now(),
    }

    setTaskList([...taskList, newTask])
    setInput('')
  }

  const removeTask = (id) => {
    setTaskList(
      taskList.filter( task => task.id !== id )
    )
  }

  return (
    <>
      <h1>
        todo
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
          width={"50px"}
          style={{borderRadius: '5px'}}
        />
      </h1>
      <div className="wrapper">
        <input
          type="text"
          placeholder="What do you want to do?"
          value={input}
          onKeyDown={handleKeyDown}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <ul>
          {taskList.length >= 0 &&
            taskList.map(
              (task) => 
              <Task 
                name={task.value} 
                key={task.id}
                id={task.id}
                removeTask={removeTask} 
              />
              )
            }
        </ul>
      </div>
    </>
  );
}
