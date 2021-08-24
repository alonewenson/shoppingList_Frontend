import axios from 'axios';

const DEFAULT_IMG = 'https://cdn.pixabay.com/photo/2016/12/21/17/11/signe-1923369_960_720.png';

export const getImg = async(name) => {
  let result = DEFAULT_IMG;
  try {
    const axiosRes = await axios.get(`http://10.0.2.2:3000/getImg/getImgByName/`+ name);    //TODO move server address to env file
    result = axiosRes.data;
  } catch (error) {
    console.log('connection to server returned error: ');
    console.log(error);
  }

  return result;
}

export const getImgsGallery = async(name) => {
  let result = [DEFAULT_IMG];
  if(true){
    const axiosRes = await axios.get(`http://10.0.2.2:3000/getImg/getImgsGallery/`+ name);  //TODO move server address to env file
    result = axiosRes.data;
  }
  return result;
}
