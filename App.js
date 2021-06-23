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
          <div className='app-header'><p>Shopi-List</p></div>
          <AddTodo />
          <TodoList />
        </div>
      </Provider>
    );
  }
}
 
 
 