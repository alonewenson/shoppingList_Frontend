import React from "react";
import { View, Image , CheckBox, TouchableOpacity, Alert} from 'react-native'
import { connect } from "react-redux";
import { toggleTodo, removeTodo } from "../redux/actions";
import { isChildMode } from "../redux/selectors";
import { styles } from "../styles";


const AlertButton = ( removeTodo, todo ) =>
Alert.alert(
  'Delete ' + todo.content + '?',
  null,
  [
    { text: "No", style: "cancel" },
    { text: "Yes", onPress: () => removeTodo(todo.id) }
  ]
);

const TodoBtn = ({ todo, toggleTodo, removeTodo, isInChildMode }) => {
  return(
      <View style={styles.control_todo}>
        {isInChildMode ? 
          <CheckBox value={todo.completed} onValueChange={() => toggleTodo(todo.id)} />
          :
          <TouchableOpacity style={styles.remove_todo_div} onPress={() => {AlertButton(removeTodo, todo)}}>
            <Image  style={styles.remove_todo_img}
                  source= {require('../assets/delete-button.png')}
                  />
          </TouchableOpacity>
        }
      </View>
  )
};


const mapStateToProps = (state) => {
  const isInChildMode = isChildMode(state);
  return { isInChildMode };
};

export default connect(
  mapStateToProps,
  { toggleTodo, removeTodo }
)(TodoBtn);


/* <View className={'todo_text ' + `todo_text_color_${textColorIndex}`}> */
  /* <Svg className='toggle-todo-svg'>
          <Rect className='toggle-todo-checkbox' x='5' y='40'/>
          {todo.completed &&  <path id='check' d='M 7,45 l 10,20 l 26,-50' /> }
        </Svg> */