import { authApi } from '../api/authApi';


class AuthServiceClass {
  async signup(firstName, lastName, password, pictures) {
    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('password', password);
    formData.append('avatar', pictures);

    try {
      const response = await authApi.signup(formData);
      return response.data;
    } catch (error) {
      throw new Error('Failed to sign up. Please try again.');
    }
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


