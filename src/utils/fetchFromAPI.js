import axios from 'axios';


const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const API_KEY = import.meta.env.REACT_APP_YOUTUBE_API_KEY;


const options = {
 
  params: {
   
   
    maxResults: '50'
 
  },
  headers: {
    'x-rapidapi-key': 'e8982c5925mshb7b66993ff6c002p1de3b4jsn4b77a950a1b3',
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }

};




export const fetchFromAPI = async (url) => {

    const {data} = await  axios.get(`${BASE_URL}/${url}`, options);
    
    return data;

}