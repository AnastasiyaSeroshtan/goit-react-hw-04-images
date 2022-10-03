import axios from "axios";

const KEY = '29230862-8ed88c62e82238b6e063c75d0';
axios.defaults.baseURL = `https://pixabay.com/api/?key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;

export const getImages = async (query,page) => {
    try{
        const response = await axios.get(`&q=${query}&page=${page}`);
        return response.data;
    }
    catch(error){
        console.log(error)
    }
}