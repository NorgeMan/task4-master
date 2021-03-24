import axios from 'axios';
const instance = axios.create({
    // baseURL: 'https://stark-ravine-53426.herokuapp.com'
    baseURL: 'http://localhost:5000'
});
export default instance;