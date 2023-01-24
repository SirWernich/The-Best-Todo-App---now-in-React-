import { useState } from "react";
import "./App.css";
import HelloWorld from "./HelloWorld";

function App() {
  const onButtonClicked = () => alert("MethodNotImplementedException");
  // gives error when array empty
  const [data, setData]: any = useState([
    { id: -1, userId: -1, title: "none", completed: false },
  ]);

  // fetch:
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((response) => response.splice(0, 50)) // just limiting it to 50
    .then((json) => console.log(json));

  // can hardcode this, because only bob, susan and joan will ever use this app
  const users: any = [
    { id: 1, name: "bob" },
    { id: 2, name: "susan" },
    { id: 3, name: "joan" },
  ];

  return (
    <div className="App">
      <HelloWorld msg="hi there" />
      <div className="home">
        <p>
          <h1>The Best Todo App</h1>
        </p>
        <HelloWorld msg="Hi there" />
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
              <span>{data[0].userId}</span>
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
