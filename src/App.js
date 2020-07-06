import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello from app</h1>
        <TodoInput />
        <TodoList />
      </div>
    );
  }
}

export default App;
