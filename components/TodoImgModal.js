import React from "react";

export const TodoImgModal = ({ handleClose, handleSelectImg, show, imgs }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {imgs.map( (value , index ) => 
          <img className='todo-item-img-in-modal' key={'todo-item-img-option_'+index} src={value} width='120px' onClick={() => handleSelectImg(value)}/>
          )}
        <button type="button" onClick={handleClose}> Cancel </button>
      </section>
    </div>
  );
};
