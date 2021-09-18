import React , { useEffect , useState } from "react";
import { Text, TouchableOpacity, View , SectionList, Image } from 'react-native'
import Modal from 'react-native-modal'
import { connect } from "react-redux";
import { setTodoImg, closeModal } from "../redux/actions";
import { getModalsSelectedTodoId } from "../redux/selectors";
import { getImgsGallery } from "../server_portal/ServerImages";
import { styles } from "../styles";

 const TodoImgModal = ({ todoId, closeModal }) => {
  console.log('TodoImgModal id ' +todoId);
  todoId = 1;
  const isModalVisible = todoId ? true : false;
  const [todoImgs, setTodoImgs] = useState([]);
  const [lastTodoId, setLastTodoId] = useState(0);

  if (todoId !== lastTodoId){
    setLastTodoId(todoId);
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
        <Text>Please select an Image {todoId}</Text>
        <SectionList className="modal-main">
          {todoImgs.map( (value , index ) => 
            <Image className='todo-item-img-in-modal' key={'todo-item-img-option_'+index} source={{ uri: value }} width='120px' onClick={() => handleSelectImg(value)}/>
            )}
            </SectionList>
            <TouchableOpacity style={styles.todo_img_div} onPress={closeModal}>
              <Text> Close Modal</Text>
            </TouchableOpacity>
      </View>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  const todoId = getModalsSelectedTodoId(state);
  console.log('TodoImgModal mapStateToProps');
  return { todoId };
};

export default connect(
  mapStateToProps
  ,
  { closeModal}
)(TodoImgModal);
