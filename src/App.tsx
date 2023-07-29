import { useState } from "react";
import "./App.css";

function App() {
  const onButtonClicked = () => alert("MethodNotImplementedException");

  // gives error when array empty
  const data: any = [{ id: -1, title: "none", completed: false }];

  // fetch:
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((response) => response.splice(0, 10)) // just limiting it to 10
    .then((json) => console.log(json));

  return (
    <div className="App">
      <div className="home">
        <h1>The Best Todo App</h1>
        <button onClick={onButtonClicked}>Load todos</button>
        <p>
          <label>Add new todo:</label>
          <input type="text" id="new-todo" />
          <button onClick={onButtonClicked}>Add</button>
        </p>
        <ul>
          <li>
            <p>
              <span>{data[0].id}</span>
              <span className="completed">
                <s>{data[0].title}</s>
              </span>
              <span>
                <label>
                  done?
                  <input
                    type="checkbox"
                    value={data[0].completed ? "checked" : ""}
                  />
                </label>
              </span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
