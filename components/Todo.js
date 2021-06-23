import React from "react";
import { connect } from "react-redux";
import { toggleTodo, removeTodo } from "../redux/actions";
import TodoImg from "./TodoImg";


const Todo = ({ todo, toggleTodo, removeTodo }) => {
  return(
    <div className='todo-item'>
      <div className={'todo-content ' + (todo.completed ? 'todo-content-completed': '')}>
        <TodoImg key={`todo-img-${todo.id}`} todo={todo} /> 
        <div className='todo-item-text'>
          {todo.content}
        </div>
        
      </div>
      <div className='toggle-todo' onClick={() => toggleTodo(todo.id)}>
        {/* <img className='toggle-todo-img' src={todo.completed ? require('../assets/accept-button.jpg') : require('../assets/delete-button.jpg')}></img> */}
        {todo.completed && <svg width="150" height="150">
          <path id="check" d="M 10,55 l 20,30 l 45,-70" />
        </svg>}
      </div>
      <div className="remove-todo" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) removeTodo(todo.id)}}>
        <img className='remove-todo-img' src= {require('../assets/delete-button.png')}></img>
      </div>
    </div>
  )
};

export default connect(
  null,
  { toggleTodo, removeTodo }
)(Todo);
