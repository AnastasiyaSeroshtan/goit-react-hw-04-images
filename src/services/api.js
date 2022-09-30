import axios from "axios";

export const getImages = async (query, page) => {
    const response = await axios.get(`https://pixabay.com/api/?key=29230862-8ed88c62e82238b6e063c75d0&q=${query}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`);
    return response.data;
}