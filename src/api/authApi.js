import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL+'/auth';
const api = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });
const authApi = {
    async signup(formData) {
      try {
        const response = await api.post('/signup', formData);
        return response;
      } catch (error) {
        throw new Error('Failed to sign up. Please try again.');
      }
    },
  
    async login(email, password){
    try {
      const response = await api.post('/login', { email, password });
      return response;
    } catch (error) {
      throw error;
    }
  },
  async getCurrentUser(token){
    try {
        const response = await api.get('/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return response;
      } catch (error) {
        throw new Error('Failed to get current user. Please try again.');
      }
  }

};

  
export { authApi }; 

