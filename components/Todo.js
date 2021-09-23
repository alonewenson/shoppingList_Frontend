import React from "react";
import { View, Text} from 'react-native'
import { connect } from "react-redux";
import TodoImg from "./TodoImg";
import { styles } from "../styles";
import TodoBtn from "./TodoBtn";

const Todo = ({ todo }) => {
  return(
    <View style={styles.todo_item} className='todo_item'>
      <View style={styles.todo_content(todo.completed)}>
        <TodoImg style={styles.todo_img_wraper} key={`todo_img-${todo.id}`} todo={todo} /> 
        
        <Text style={styles.todo_text} numberOfLines={1}  >{todo.content}</Text>

      </View>
      <TodoBtn todo={todo}/>
    </View>
  )
};

export default connect(
  null
)(Todo);


/* <View className={'todo_text ' + `todo_text_color_${textColorIndex}`}> */
  /* <Svg className='toggle-todo-svg'>
          <Rect className='toggle-todo-checkbox' x='5' y='40'/>
          {todo.completed &&  <path id='check' d='M 7,45 l 10,20 l 26,-50' /> }
        </Svg> */