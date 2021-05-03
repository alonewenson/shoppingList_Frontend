import React , { useEffect , useState } from "react";
import axios from 'axios';
import { connect } from "react-redux";
import { setTodoImg } from "../redux/actions";
import { getTodos } from "../redux/selectors";
import '../styles.css';

const DEFAULT_IMG = 'https://cdn.pixabay.com/photo/2016/12/21/17/11/signe-1923369_960_720.png';

//TODO move calles to backend to separate file
const getImg = async(name) => {
  let result = DEFAULT_IMG;
  if(true){
    const axiosRes = await axios.get(`http://localhost:3000/getImg/`+ name);
    result = axiosRes.data;
  }
  return result;
}

//TODO move calles to backend to separate file
const getImgsGallery = async(name) => {
  let result = [DEFAULT_IMG];
  if(true){
    const axiosRes = await axios.get(`http://localhost:3000/getImgsGallery/`+ name);
    result = axiosRes.data;
  }
  return result;
}


//TODO move modal to a separate file
const Modal = ({ handleClose, handleSelectImg, show, imgs }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {imgs.map( (value , index ) => 
          <img className='todo-item-img' key={'todo-item-img-option_'+index} src={value} width='120px' onClick={() => handleSelectImg(value)}/>
          )}
        <button type="button" onClick={handleClose}> Cancel </button>
      </section>
    </div>
  );
};

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

  //TODO move the bellow css in img to CSS file
  return(
    <div className="todo-item-img">
      <img className='todo-item-img' src={todo.imgSrc} width='120px' onClick={openModal}/>  
      <Modal show={modalIsOpen} handleClose={closeModal} handleSelectImg={handleSelectImg} imgs={todoImgs} />
    </div>
  )
};

//TODO dont listen to all todos, just to this one
const mapStateToProps = state => {
  const todos = getTodos(state);
  return { todos };
};

export default connect(
  mapStateToProps,
  { setTodoImg }
)(TodoImg);

