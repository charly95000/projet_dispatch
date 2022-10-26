import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Inscription from './pages/inscription';
import Navbar from './components/navbar';
import AddManga from './pages/addManga';
import UpdateRecette from './pages/updateRecette';
import Login from './pages/login';
import Admin from './pages/admin';
import { UserContext } from './context/userContext';
import { useEffect, useReducer, useState } from 'react';
import useAxiosGet from './hooks/useAxiosGet';
import axios from 'axios';
import { AuthReducer } from './hooks/authReducer';
if(localStorage.getItem("accessToken")){
  axios.defaults.headers.common['Authorization'] =`Bearer ${(localStorage.getItem("accessToken"))}`
}


function App() {
  
  
  const {data:userData,isLoading:isLoadingUser,error:userError,getRequest:getData} = useAxiosGet(`${process.env.REACT_APP_API_URL}/user/log`)

  useEffect(()=>{
    if(userData){
    console.log(userData)
    
  }
  },[userData])

 
  return (
    <>
    <BrowserRouter>
    
      <Routes>
        <Route index element ={<Home />} />
        <Route path="inscription" element={<Inscription />} />
        <Route path="add" element={<AddManga />} />
        <Route path="update/:recetteId" element={<UpdateRecette />}/>
        <Route path="login" element={<Login />}/>
        <Route path="admin" element={<Admin />}/>
      </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
