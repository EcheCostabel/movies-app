import axios from "axios";


const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'e22f19ad5b8f4ed21cb5f4a3cd651ad0',
        language: 'es-ES'
    }
});

export default movieDB;