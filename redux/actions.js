import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, SET_TODO_IMG, OPEN_MODAL, CLOSE_MODAL } from "./actionTypes";

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

export const openModal = (id) => ({
  type: OPEN_MODAL,
  payload: {
    id: id
  }
})

export const closeModal = () => ({
  type: CLOSE_MODAL
})


