import React, { useState, useContext, useReducer, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAxiosPost from '../hooks/useAxiosPost';
import { UserContext } from '../context/userContext';
import useAxiosGet from '../hooks/useAxiosGet';
import Navbar from '../components/navbar';

export default function Login() {
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const [isSubmitted,setIsSubmitted] = useState(false)
    const {data,isLoading:isl,error,postData} = useAxiosPost(`${process.env.REACT_APP_API_URL}/user/login`,{email,password})
    const {data:userData,isLoading:isLoadingUser,error:userError,getRequest:getData} = useAxiosGet(`${process.env.REACT_APP_API_URL}/user/log`)

    
    const handleSubmit = e => {
        e.preventDefault();
        setIsSubmitted(true)
        postData()
        }
  useEffect(()=>{
    if(data){
      console.log(data)
      axios.defaults.headers.common['Authorization'] =`Bearer ${data.accessToken}`;
      localStorage.setItem("accessToken",data.accessToken)
      getData()
    }
  },[data])

  useEffect(()=>{
    if(userData){
      console.log(userData)
      
    }
  },[userData])
    
  return (
    <>
    <Navbar />
    <br/>
    <br/>
    <br/>
    <form onSubmit={handleSubmit}>
        {isl && isSubmitted ? <p>envoie en cours</p> : null}
    {data && data.accessToken}
        <label for="name">Email</label>
        <input value={email} type="text"  onChange={(e)=> setEmail(e.target.value)}/>
        <label for="name">Mot de passe</label>
        <input value={password} type="text"  onChange={(e)=> setPassword(e.target.value)}/>
        <button type="submit">ENVOYER<i class="fas fa-paper-plane"></i></button>
    </form>
    </>
    
  )
}