import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL+'/auth';
const api = axios.create({
    baseURL: BASE_URL,
    headers: {
      'X-APP-SECRET': process.env.REACT_APP_API_KEY,
    },
  });
const authApi = {
    async signup(formData) {
      try {
        const response = await api.post('/signup', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }});
        return response;
      } catch (error) {
        throw new Error('Failed to sign up. Please try again.');
      }
    },
  
    async login(email, password){
    try {
      const response = await api.post('/login', { email, password }, {
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
        throw new Error('Failed to get current user. Please try again.');
      }
  }

};

  
export { authApi }; 

