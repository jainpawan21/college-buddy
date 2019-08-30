import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://itr1.herokuapp.com/'
})

export default instance;