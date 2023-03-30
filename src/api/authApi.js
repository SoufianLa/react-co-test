import axios from 'axios';
import {INTERNAL_MSG} from '../messages'

const BASE_URL = process.env.REACT_APP_API_BASE_URL+'/api';
const HTTP_OK = 200;
const HTTP_CREATED = 201;
const api = axios.create({
    baseURL: BASE_URL,
    headers: {
      'X-APP-SECRET': process.env.REACT_APP_API_KEY,
    },
  });
const authApi = {
    async signup(formData) {
      try {
        const response = await api.post('/auth/signup', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }});
        return response;
      } catch (error) {
        throw new Error(INTERNAL_MSG);
      }
    },
  
    async login(formData){
    try {
      const response = await api.post('/auth/login', formData, {
        'Content-Type': 'application/json'
      });
      return response;
    } catch (error) {
      throw error;
    }
  },
  async getCurrentUser(token){
    try {
        const response = await api.get('/me', {
          headers: {
            'Content-Type': 'application/json',
            'X-AUTH-TOKEN': token,
          },
        });
        return response;
      } catch (error) {
        throw new Error(INTERNAL_MSG);
      }
  }

};

  
export { authApi, HTTP_OK, HTTP_CREATED}; 

