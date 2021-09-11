import axios from 'axios';

const DEFAULT_IMG = 'https://cdn.pixabay.com/photo/2016/12/21/17/11/signe-1923369_960_720.png';

// export const getImg = async(name) => {
//   let result = DEFAULT_IMG;
//   try {
//     const axiosRes = await axios.get(`https://192.168.1.10:3000/images/getImg/`+ name);    //TODO move server address to env file
//     result = axiosRes.data;
//   } catch (error) {
//     console.log('connection to server returned error: ');
//     console.log(error);
//   }

//   return result;
// }

export const getImg = async (imgName) => { 
  try {   
     const response = await fetch('http://192.168.1.10:3000/images/getImg/' + imgName);
     const json = await response.json();   
     return json; 
  }catch (error) {
    console.log('connection to server returned error: ');
    console.error(error);
    return DEFAULT_IMG;
  }
};

export const getImgsGallery = async(name) => {
  let result = [DEFAULT_IMG];
  if(true){
    const axiosRes = await axios.get(`https://192.168.1.10:3000/images/getImgGallery/`+ name);  //TODO move server address to env file
    result = axiosRes.data;
  }
  return result;
}
