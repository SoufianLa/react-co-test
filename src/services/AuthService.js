import { authApi, HTTP_CREATED, HTTP_OK } from '../api/authApi';
import SecureLS from "secure-ls";



class AuthServiceClass {
  #secureLocalStorage = new SecureLS();

  async signup(firstName, lastName, email, password, pictures) {
    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('password', password);
    for (let i = 0; i < pictures.length; i++) {
      formData.append(`photos[${i}]`, pictures[i], pictures[i].name);
    }
    try {
      const response = await authApi.signup(formData);

      if (response.status === HTTP_CREATED){
        return true;
      }else{
        throw new Error(response.data.message);
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }


  async login(email, password) {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    try {
      const response = await authApi.login(formData);
      if (response.status === HTTP_OK){
        this.saveToken(response.data)
        return response.data;
      }else{
        throw new Error(response.data.message);
      } 
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async getCurrentUser() {
    try {
      const token = this.getToken();
      const response = await authApi.getCurrentUser(token);
      if (response.status === HTTP_OK){
        return  response.data.body;
      }else
      {
        throw new Error(response.data.message);
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }

  isLoggedIn(){
      return this.getToken() ? true: false;
    
  }

  saveToken(user) {
    this.#secureLocalStorage.set("token", user.body.session.access_token);
  }
  
  getToken() {

    return this.#secureLocalStorage.get("token");

  }

}

const AuthService = new AuthServiceClass();
export default AuthService;


