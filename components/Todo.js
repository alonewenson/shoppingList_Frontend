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
      <View style={styles.todo_content} className={'todo_content ' + (todo.completed ? 'todo_content_completed': '')}>
        <TodoImg style={styles.todo_img_wraper} key={`todo_img-${todo.id}`} todo={todo} /> 
        {/* <View className={'todo_text ' + `todo_text_color_${textColorIndex}`}> */}
        <Text style={styles.todo_text} numberOfLines={1}  >{todo.content}</Text>
        {/* </View> */}
      </View>
      <View style={styles.toggle_todo} className='toggle-todo' onClick={() => toggleTodo(todo.id)}>
        {/* <Svg className='toggle-todo-svg'>
          <Rect className='toggle-todo-checkbox' x='5' y='40'/>
          {todo.completed &&  <path id='check' d='M 7,45 l 10,20 l 26,-50' /> }
        </Svg> */}
          <CheckBox value={todo.completed} />
      </View>

      <TouchableOpacity style={styles.remove_todo}
        onPress={() => { if (window.confirm('Are you sure you wish to delete this item?')) removeTodo(todo.id)}}>
        <Image resizeMode='contain'
              source= {require('../assets/delete-button.png')} 
               />
      </TouchableOpacity>
    </View>
  )
};

export default connect(
  null,
  { toggleTodo, removeTodo }
)(Todo);
