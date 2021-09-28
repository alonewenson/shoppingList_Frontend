import AsyncStorage from '@react-native-async-storage/async-storage';

export const getImgSrc = async (name) => {
  name = '@' + name + '_imgSrc';
  try {    
    return AsyncStorage.getItem(name); 
  } 
  catch(e) {    
    console.log('error: could not get imgSrc ' + name);
  }
}

export const setImgSrc = async (name, imgSrc) => {
  name = '@' + name + '_imgSrc';
  try {
    AsyncStorage.setItem(name, imgSrc)
  }
  catch (e){
    console.log('error: could not save imgSrc ' + name + ' : ' + imgSrc);
  }
}