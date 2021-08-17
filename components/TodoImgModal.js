import React from "react";
import { Button, View , SectionList , Image } from 'react-native'

export const TodoImgModal = ({ handleClose, handleSelectImg, show, imgs }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <View className={showHideClassName}>
      <SectionList className="modal-main">
        {imgs.map( (value , index ) => 
          <Image className='todo-item-img-in-modal' key={'todo-item-img-option_'+index} source={value} width='120px' onClick={() => handleSelectImg(value)}/>
          )}
        <Button type="button" onClick={handleClose} title='Cancel' />
      </SectionList>
    </View>
  );
};
