import { authApi, HTTP_CREATED, HTTP_OK } from '../api/authApi';
import {INTERNAL_MSG, ERROR_MSG} from '../messages'


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
      if (response.status === HTTP_CREATED) return true;
    } catch (error) {
      throw new Error(INTERNAL_MSG);
    }
    throw new Error(ERROR_MSG);
  }


  async login(username, password) {
    try {
      const response = await authApi.login({ username, password });
      if (response.status === HTTP_OK){
        this.#saveToken(response.data)
        return response.data;
      } 
    } catch (error) {
      throw new Error(INTERNAL_MSG);
    }
    throw new Error(ERROR_MSG);
  }
  async getCurrentUser() {
    try {
      const token = localStorage.getItem('token')
      const response = await authApi.getCurrentUser(token);
      if (response.status === HTTP_OK) return  response.data;
    } catch (error) {
      throw new Error(INTERNAL_MSG);
    }
    throw new Error(ERROR_MSG);
  }

  #isLoggedIn(){
      return localStorage.getItem('token') ? true: false;
    
  }

  #saveToken(user){
    localStorage.setItem('token', user.body.accessToken);
  };

}

const AuthService = new AuthServiceClass();
export default AuthService;


