import React from "react";
import { connect } from "react-redux";
import { toggleTodo, removeTodo } from "../redux/actions";
import TodoImg from "./TodoImg";


const Todo = ({ todo, toggleTodo, removeTodo, textColorIndex }) => {
  return(
    <div className='todo-item'>
      <div className={'todo-content ' + (todo.completed ? 'todo-content-completed': '')}>
        <TodoImg key={`todo-img-${todo.id}`} todo={todo} /> 
        <div className={'todo-item-text ' + `todo-item-text-color-${textColorIndex}`}>
          {todo.content}
        </div>
        
      </div>
      <div className='toggle-todo' onClick={() => toggleTodo(todo.id)}>
        {/* <img className='toggle-todo-img' src={todo.completed ? require('../assets/accept-button.jpg') : require('../assets/delete-button.jpg')}></img> */}
        <svg className='toggle-todo-svg'>
          <rect className='toggle-todo-checkbox' x='5' y='40'/>
          {todo.completed &&  <path id='check' d='M 7,45 l 10,20 l 26,-50' /> }
        </svg>
      </div>
      <div className='remove-todo'>
        <img className='remove-todo-img' 
              src= {require('../assets/delete-button.png')} 
              onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) removeTodo(todo.id)}}></img>
      </div>
    </div>
  )
};

export default connect(
  null,
  { toggleTodo, removeTodo }
)(Todo);
