import React , { useEffect , useState } from "react";
import { connect } from "react-redux";
import { setTodoImg } from "../redux/actions";
import { getTodoById } from "../redux/selectors";
import { TodoImgModal } from "./TodoImgModal";
import { getImg , getImgsGallery } from "../server_portal/ServerImages";
import '../styles.css';

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
    <div className="todo-item-img">
      <img className='todo-item-img' src={todo.imgSrc} onClick={openModal}/>  
      <TodoImgModal show={modalIsOpen} handleClose={closeModal} handleSelectImg={handleSelectImg} imgs={todoImgs} />
    </div>
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

