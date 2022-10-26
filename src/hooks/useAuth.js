import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from './userContext';
import useAxiosPost from './useAxiosPost';
export default function useAuth() {  
   let navigate = useNavigate();
   const { setUser } = useContext(UserContext);
   
   //set user in context and push them home
   const setUserContext = async () => {
   return await axios.get(`${process.env.REACT_APP_API_URL}/user/log`).then(res => {
       console.log(res.data)
       setUser(res.data);
       navigate('/');
     }).catch((err) => {
       setError(err);
   })
  }
//register user
  const registerUser = async (data) => {
     const { username, email, password, passwordConfirm } = data;
     return axios.post(`auth/register`, {
        username, email, password, passwordConfirm
     }).then(async () => {
         await setUserContext();
     }).catch((err) => {
         setError(err.response.data);
      })
    };

    const loginUser = async (email,password) => {
        console.log("tentativeconnexion")
            return axios.post(`${process.env.REACT_APP_API_URL}/user/login`, {
               email, password
            }).then(async (res) => {
                console.log("accesstoken")
                const accessToken =res.data.accessToken;
                const refreshToken = res.data.refreshToken
                console.log(accessToken)
                console.log(refreshToken)
                localStorage.setItem('accessToken',accessToken)
                localStorage.setItem('refreshToken',refreshToken)
                axios.defaults.headers.common['Authorization'] =`Bearer ${res.data.accessToken}`;
                await setUserContext();
                

            }).catch((err) => {
                setError(err.response);
                console.log(err)
       })
    };

    const logoutUser = async () =>{
        setUser(null);
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        delete axios.defaults.headers.common['Authorization']
    }

return {
   registerUser,
   loginUser,
   logoutUser,
   error
   }
}