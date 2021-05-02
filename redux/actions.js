import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, SET_TODO_IMG } from "./actionTypes";

let nextTodoId = 0;

export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  payload: { id }
});

export const setTodoImg = (id, imgSrc) => ({
  type: SET_TODO_IMG,
  payload: {
    id: id,
    imgSrc: imgSrc
  }
})



