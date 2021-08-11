import React from "react";
import { Text , View } from 'react-native'
import { connect } from "react-redux";
import Todo from "./Todo";
import { getTodos } from "../redux/selectors";


const nTextColors = 5;

const TodoList = ({ todos }) => (
  <View className="todo-list">
    {todos && todos.length
      ? todos.map((todo, index) => {
          return <Todo key={`todo-${todo.id}`} todo={todo} textColorIndex={index % nTextColors} />;
        })
      : <Text>"Please add items"</Text>}
  </View>
);

const mapStateToProps = state => {
  const todos = getTodos(state);
  return { todos };
};

export default connect(mapStateToProps)(TodoList);
