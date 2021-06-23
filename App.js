import React from "react";

import { Provider } from "react-redux";
import store from "./redux/store";

import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className='todo-app'>
          <h1>Todo List</h1>
          <AddTodo />
          <TodoList />
        </div>
      </Provider>
    );
  }
}
 
 
 