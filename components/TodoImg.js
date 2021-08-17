import React , { useEffect , useState } from "react";
import { View, Image } from 'react-native'
import { connect } from "react-redux";
import { setTodoImg } from "../redux/actions";
import { getTodoById } from "../redux/selectors";
import { TodoImgModal } from "./TodoImgModal";
import { getImg , getImgsGallery } from "../server_portal/ServerImages";
import { styles } from "../styles";

const TodoImg = ({ todo , setTodoImg }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [todoImgs, setTodoImgs] = useState([]);

  const openModal = () => {
    if(todoImgs.length === 0)
    {
      getImgsGallery(todo.content).then( res => {
        setTodoImgs(res)
      })
    }
    setIsOpen(true);
  }
  const closeModal =() => {
    setIsOpen(false);
  }

  const handleSelectImg = newImgSrc => {
    setTodoImg(todo.id, newImgSrc);
    setIsOpen(false);
  }

  useEffect(() => {
    getImg(todo.content).then(res => {
        setTodoImg(todo.id, res)
      })
  }, []);

  return(
    <View style={styles.todo_img_div} className="todo_img_div">
      <Image style={styles.todo_img} className='todo_img' source={todo.imgSrc} onClick={openModal}/>  
      <TodoImgModal show={modalIsOpen} handleClose={closeModal} handleSelectImg={handleSelectImg} imgs={todoImgs} />
    </View>
  )
};

const mapStateToProps = (state, ownProps) => {
  const todo = getTodoById(state, ownProps.todo.id);
  return { todo };
};

export default connect(
  mapStateToProps,
  { setTodoImg }
)(TodoImg);

