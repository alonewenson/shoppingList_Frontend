import React , { useEffect } from "react";
import { View, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import { connect } from "react-redux";
import store from "../redux/store";
import { setTodoImg, openModal } from "../redux/actions";
import { getTodoById, isChildMode } from "../redux/selectors";
import { getImg } from "../controllers/ImgController";
import { styles } from "../styles";

const TodoImg = ({ todo , setTodoImg , openModal}) => {

  useEffect(() => {
    getImg(todo.content).then(res => {
        setTodoImg(todo.id, res)
      })
  }, []);

  const handleClick = () => {
    if(!isChildMode(store.getState())){
      openModal(todo.id)
    }
  }

  return(
    <View >
      {todo.imgSrc !== undefined ?
          <TouchableOpacity style={styles.todo_img_div} onPress={handleClick}>
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

