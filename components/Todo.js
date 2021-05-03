import React from "react";
import { connect } from "react-redux";
import { toggleTodo, removeTodo } from "../redux/actions";
import TodoImg from "./TodoImg";


const Todo = ({ todo, toggleTodo, removeTodo }) => {

  return(
    <li className="todo-item">
      {todo && todo.completed ? "👌" : "👋"}{" "}
      <TodoImg key={`todo-img-${todo.id}`} todo={todo} />
      <span className='todo-item-content'>
        {todo.content}
      </span>
      <button className="toggle-todo" onClick={() => toggleTodo(todo.id)}>
        V
      </button>
      <button className="remove-todo" onClick={() => removeTodo(todo.id)}>
        -
      </button>
    </li>
  )
};

export default connect(
  null,
  { toggleTodo, removeTodo }
)(Todo);
