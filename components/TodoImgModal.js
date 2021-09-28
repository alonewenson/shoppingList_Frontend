import React , { useState } from "react";
import { Text, TouchableOpacity, View , Image } from 'react-native'
import Modal from 'react-native-modal'
import { connect } from "react-redux";
import { setTodoImg, closeModal } from "../redux/actions";
import { getModalsSelectedTodoId, getTodoById } from "../redux/selectors";
import { getImgsGallery } from "../controllers/ImgController";
import { setImgSrc } from "../controllers/storageController";
const pluralize = require('pluralize')
import { styles } from "../styles";

 const TodoImgModal = ({ todo, closeModal, setTodoImg }) => {
  const isModalVisible = todo.id ? true : false;
  const [todoImgs, setTodoImgs] = useState([]);
  const [lastTodoId, setLastTodoId] = useState(0);

  const handleSelectImg = ( src ) => {
    setTodoImg(todo.id, src);
    setImgSrc(pluralize.singular(todo.content.toLowerCase()), src);
    closeModal();
  }

  if (todo.id && todo.id !== lastTodoId){
    setLastTodoId(todo.id);
    getImgsGallery(todo.content).then(res => {
        setTodoImgs(res);
      })
  };

  return (
    <Modal
      animationType="slide"
      visible={isModalVisible}
      style={styles.modal}
    >
      <View style={styles.modal_view}>
        <View style={styles.modal_header}>
          <View style={{ flex: 1 }}>
            <Text>Please select an Image for {todo.content}</Text>
          </View>
          <TouchableOpacity style={styles.remove_todo_div} onPress={closeModal}>
            <Image style={styles.remove_todo_img}
                source= {require('../assets/delete-button.png')}/>
          </TouchableOpacity>
        </View>
        <View style={styles.modal_img_selection}>
          {todoImgs.map( (value , index ) =>
            <TouchableOpacity style={styles.modal_img} key={'modal-img-btn_'+index} onPress={() => handleSelectImg(value)}>
              <Image 
                style={{flex: 1}}
                key={'modal-img_'+index} 
                resizeMode="contain"
                source={{ uri: value }}/>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  const todoId = getModalsSelectedTodoId(state);
  const todo = getTodoById(state, todoId);
  return { todo };
};

export default connect(
  mapStateToProps,
  { closeModal, setTodoImg }
)(TodoImgModal);
