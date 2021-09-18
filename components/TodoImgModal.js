import React , { useEffect , useState } from "react";
import { Text, TouchableOpacity, View , SectionList, Image } from 'react-native'
import Modal from 'react-native-modal'
import { connect } from "react-redux";
import { setTodoImg, closeModal } from "../redux/actions";
import { getModalsSelectedTodoId, getTodoById } from "../redux/selectors";
import { getImgsGallery } from "../server_portal/ServerImages";
import { styles } from "../styles";

 const TodoImgModal = ({ todo, closeModal }) => {
  console.log(todo.id);
  const isModalVisible = todo.id ? true : false;
  const [todoImgs, setTodoImgs] = useState([]);
  const [lastTodoId, setLastTodoId] = useState(0);

  if (todo.id !== lastTodoId){
    setLastTodoId(todo.id);
    getImgsGallery('banana').then(res => {
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
        <Text>Please select an Image {todo.content}</Text>
        <SectionList className="modal-main">
          {todoImgs.map( (value , index ) => 
            <Image key={'modal-img-option_'+index} source={{ uri: value }} width='120px' onClick={() => handleSelectImg(value)}/>
            )}
            </SectionList>
            <TouchableOpacity onPress={closeModal}>
              <Text> Close Modal</Text>
            </TouchableOpacity>
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
  { closeModal }
)(TodoImgModal);
