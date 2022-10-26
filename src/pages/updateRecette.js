import React, { useEffect } from 'react';
import { Outlet, Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import useAxiosPut from '../hooks/useAxiosPut';
import useAxiosGet from '../hooks/useAxiosGet';

export default function UpdateRecette(){
    let {recetteId} = useParams()
    const dataRecette = useAxiosGet(`${process.env.REACT_APP_API_URL}/article/${recetteId}`).data
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [selectedFile, setSelectedFile] = useState('');
    const formData = new FormData()
    formData.append("image", selectedFile)
    formData.append("title",title)
    formData.append("description", description)
    const {data, error, isLoading, putData} = useAxiosPut(`${process.env.REACT_APP_API_URL}/article/${recetteId}`,formData,{headers: {'Content-Type': 'multipart/form-data'}})
    useEffect(()=>{
        if(dataRecette){
            setTitle(dataRecette.title)
            setDescription(dataRecette.description)
        }
    }  ,[dataRecette])
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        putData()
        console.log(error)
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