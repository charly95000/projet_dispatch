import React, { useEffect } from 'react';
import { Outlet, Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import useAxiosPost from '../hooks/useAxiosPost';

export default function AddManga(){
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [selectedFile, setSelectedFile] = useState();
    const formData = new FormData()
    formData.append("image", selectedFile)
    formData.append("title",title)
    formData.append("description", description)
    const {data, error, isLoading, postData} = useAxiosPost(`${process.env.REACT_APP_API_URL}/article`,formData,{headers: {'Content-Type': 'multipart/form-data'}})

    
    const handleSubmit = (e)=>{
        e.preventDefault();
        postData()
    }

    return (
        <>
        {data && data.message}
            <h3>Ajoute ton manga</h3>
            <br/>
            <form onSubmit={handleSubmit}>
                <label for="title">Titre :</label>
                <br/>
                <input type="text" id="title" value={title} name="title" onChange={(e)=> setTitle(e.target.value)}/>
                <br/>
                <label for="description">Description:</label>
                <br/>
                <input type="text" id="description" name="description" value={description} onChange={(e)=> setDescription(e.target.value)}/>
                <br/><br/>
                <input type="file" id="file" onChange={(e)=> setSelectedFile(e.target.files[0])}/>
                {selectedFile && <img alt="preview" class="preview" src={URL.createObjectURL(selectedFile)}/>}
                <button type="submit" > Ajouter </button>
            </form>
        </>
    )
}