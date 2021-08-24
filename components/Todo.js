import React from "react";
import { View, Text, Image , CheckBox, TouchableOpacity } from 'react-native'
import Svg, { Rect } from 'react-native-svg';
import { connect } from "react-redux";
import { toggleTodo, removeTodo } from "../redux/actions";
import TodoImg from "./TodoImg";
import { styles } from "../styles";

const Todo = ({ todo, toggleTodo, removeTodo, textColorIndex }) => {
  return(
    <View style={styles.todo_item} className='todo_item'>
      <View style={styles.todo_content(todo.completed)} className={'todo_content ' + (todo.completed ? 'todo_content_completed': '')}>
        <TodoImg style={styles.todo_img_wraper} key={`todo_img-${todo.id}`} todo={todo} /> 
        
        <Text style={styles.todo_text} numberOfLines={1}  >{todo.content}</Text>

      </View>
      <View style={styles.control_todo}>
        <CheckBox value={todo.completed} onValueChange={() => toggleTodo(todo.id)} />
        <TouchableOpacity style={styles.remove_todo_div} onPress={() => {removeTodo(todo.id)}}>
          <Image  style={styles.remove_todo_img}
                source= {require('../assets/delete-button.png')}
                />
        </TouchableOpacity>
      </View>
    </View>
  )
};

export default connect(
  null,
  { toggleTodo, removeTodo }
)(Todo);


/* <View className={'todo_text ' + `todo_text_color_${textColorIndex}`}> */
  /* <Svg className='toggle-todo-svg'>
          <Rect className='toggle-todo-checkbox' x='5' y='40'/>
          {todo.completed &&  <path id='check' d='M 7,45 l 10,20 l 26,-50' /> }
        </Svg> */