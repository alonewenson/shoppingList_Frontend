import React from "react";
import { ScrollView, Text } from 'react-native'
import { connect } from "react-redux";
import Todo from "./Todo";
import { getTodos } from "../redux/selectors";
import { styles } from "../styles";

const nTextColors = 5;

const TodoList = ({ todos }) => (
  <ScrollView  style={styles.todo_list}>
    {todos && todos.length
      ? todos.map((todo, index) => {
          return <Todo key={`todo-${todo.id}`} todo={todo} textColorIndex={index % nTextColors} />;
        })
      : <Text>List is empty</Text>}
  </ScrollView>
);

const mapStateToProps = state => {
  const todos = getTodos(state);
  return { todos };
};

export default connect(mapStateToProps)(TodoList);
