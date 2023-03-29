import axios from 'axios';

const API_URL = process.env.REACT_APP_API_BASE_URL+'/auth';

const authApi = {
    async signup(formData) {
      try {
        const response = await axios.post(`${API_URL}/signup`, formData);
        return response;
      } catch (error) {
        throw new Error('Failed to sign up. Please try again.');
      }
    },
  
    async login(email, password){
    try {
      const response = await axios.post(`${API_URL}/login`, { email, password });
      return response;
    } catch (error) {
      throw error;
    }
  }

};

  
export { authApi }; 

