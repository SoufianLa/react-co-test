import { authApi } from '../api/authApi';


class AuthServiceClass {
  async signup(firstName, lastName, email, password, pictures) {
    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('password', password);
    for (let i = 0; i < pictures.length; i++) {
      formData.append('photos', pictures[i]);
    }

    try {
      const response = await authApi.signup(formData);
      if (response.status === 201) return true;
    } catch (error) {
      throw new Error('Failed to sign up. internal error.');
    }
    throw new Error('Failed to sign up. Please try again later.');
  }


  async login(username, password) {
    try {
      const response = await authApi.login({ username, password });
      return response.data;
    } catch (error) {
      throw new Error('Failed to log in. Please try again.');
    }
  }
  async getCurrentUser(token) {
    try {
      const response = await authApi.getCurrentUser(token);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch current user. Please try again.');
    }
  }

}

const AuthService = new AuthServiceClass();
export default AuthService;


