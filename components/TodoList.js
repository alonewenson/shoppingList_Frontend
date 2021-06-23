import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { getTodos } from "../redux/selectors";

const TodoList = ({ todos }) => (
  <div className="todo-list">
    {todos && todos.length
      ? todos.map((todo, index) => {
          return <Todo key={`todo-${todo.id}`} todo={todo} />;
        })
      : "Please add items"}
  </div>
);

const mapStateToProps = state => {
  const todos = getTodos(state);
  return { todos };
};

export default connect(mapStateToProps)(TodoList);
