import React , { useEffect } from "react";
import { View, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import { connect } from "react-redux";
import { setTodoImg, openModal } from "../redux/actions";
import { getTodoById } from "../redux/selectors";
import { getImg } from "../server_portal/ServerImages";
import { styles } from "../styles";

const TodoImg = ({ todo , setTodoImg , openModal}) => {

  useEffect(() => {
    getImg(todo.content).then(res => {
        setTodoImg(todo.id, res)
      })
  }, []);

  return(
    <View >
      {todo.imgSrc !== undefined ?
          <TouchableOpacity style={styles.todo_img_div} onPress={() => openModal(todo.id)}>
            <Image style={styles.todo_img} source={{ uri: todo.imgSrc }} resizeMode="contain"/>  
          </TouchableOpacity> 
          :
          <View style={styles.todo_img_div}>
            <ActivityIndicator size="large"  color="#0000ff" />
          </View>}
    </View>
  )
};

const mapStateToProps = (state, ownProps) => {
  const todo = getTodoById(state, ownProps.todo.id);
  return { todo };
};

export default connect(
  mapStateToProps,
  { setTodoImg, openModal }
)(TodoImg);

