import axios from 'axios'

process.env.NODE_ENV === 'production'
  ? (baseURL = 'here should be your production endpoint')
  : (baseURL = 'http://localhost:3000');

const userService = axios.create({
  withCredentials: true, 
  baseURL 
});