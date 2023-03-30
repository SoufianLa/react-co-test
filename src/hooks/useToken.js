import { useState } from "react";



export default function useToken(){
    const  getToken = () =>{
        const user = localStorage.getItem('user');
        const userData = JSON.parse(user);
        return userData?.accessToken
      }
      const [token, setToken] = useState(getToken)

      const saveToken = user => {
        localStorage.setItem('user', JSON.stringify(user));
        setToken(user.body);
      };

      return {
        setToken : saveToken,
        token
      }

}