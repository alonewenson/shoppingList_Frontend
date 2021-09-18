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
  return DEFAULT_IMG;
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
  return ["https://cdn.pixabay.com/photo/2012/04/26/18/41/banana-42793_150.png","https://cdn.pixabay.com/photo/2014/12/21/23/39/bananas-575773_150.png","https://cdn.pixabay.com/photo/2014/04/03/10/26/banana-310449_150.png","https://cdn.pixabay.com/photo/2013/07/12/16/57/banana-151553_150.png","https://cdn.pixabay.com/photo/2014/04/03/11/07/bananas-311788_150.png","https://cdn.pixabay.com/photo/2014/12/21/23/28/bananas-575412_150.png","https://cdn.pixabay.com/photo/2016/10/27/09/45/banana-1773796_150.png","https://cdn.pixabay.com/photo/2012/04/05/00/32/banana-25339_150.png","https://cdn.pixabay.com/photo/2016/03/31/18/22/banana-1294314_150.png","https://cdn.pixabay.com/photo/2012/04/18/19/18/bananas-37617_150.png","https://cdn.pixabay.com/photo/2017/02/12/11/01/banana-2059729_150.png"];
  try {   
    const response = await fetch(`http://192.168.1.10:3000/images/getImgGallery/`+ name);  //TODO move server address to env file
    const json = await response.json();   
    return json; 
  }catch (error) {
    console.log('connection to server returned error: ');
    console.error(error);
    return [];
  }
}


