import React from "react";
import { Button, View } from 'react-native'

export const TodoImgModal = ({ handleClose, handleSelectImg, show, imgs }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <View className={showHideClassName}>
      <section className="modal-main">
        {imgs.map( (value , index ) => 
          <img className='todo-item-img-in-modal' key={'todo-item-img-option_'+index} src={value} width='120px' onClick={() => handleSelectImg(value)}/>
          )}
        <Button type="button" onClick={handleClose} title='Cancel' />
      </section>
    </View>
  );
};
