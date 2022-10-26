import axios from 'axios';
import React, { useState, useEffect } from 'react';
import useAxiosPost from '../hooks/useAxiosPost';

export default function Inscription() {
    const [firstname,setFirstname]= useState('');
    const [lastname,setLastname]= useState('');
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const [isSubmitted,setIsSubmitted] = useState(false)
    const {data, error, isLoading, postData} = useAxiosPost(`${process.env.REACT_APP_API_URL}/user/signup`,{firstname,lastname,email,password})

    const handleSubmit = e => {
        e.preventDefault();
        setIsSubmitted(true)
        postData()
    }
  return (
    <>
    {isLoading && isSubmitted ? <p>envoie en cours</p> : null}
    {data && data.message}
    <form onSubmit={handleSubmit}>
        <label for="id">id</label>
        <input value={firstname} type="text"  onChange={(e)=> setFirstname(e.target.value)}/>
        <label for="name">Name</label>
        <input value={lastname} type="text"  onChange={(e)=> setLastname(e.target.value)}/>
        <label for="name">type</label>
        <input value={email} type="text"  onChange={(e)=> setEmail(e.target.value)}/>
        <label for="name">city</label>
        <input value={password} type="text"  onChange={(e)=> setPassword(e.target.value)}/>
        <button type="submit">ENVOYER<i class="fas fa-paper-plane"></i></button>
    </form>
    </>
  )
}