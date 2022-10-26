import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import useAxiosGet from '../hooks/useAxiosGet';
import useAxiosDelete from '../hooks/useAxiosDelete';

export default function Admin() {
  const navigate = useNavigate()
  const recettesGet = useAxiosGet(`${process.env.REACT_APP_API_URL}/article`)
    const refreshData =recettesGet.getRequest
    const [recetteId,setRecetteId] = useState()
    const [refresh,setRefresh] =useState(false)
    const {data, error, isLoading, deleteData} = useAxiosDelete(`${process.env.REACT_APP_API_URL}/article/${recetteId}`)
    

  useEffect(()=>{
    if(recetteId){
      deleteData().then(()=>refreshData())
      
     }
  },[recetteId])

  // useEffect(()=>{
  //   if(refresh && !error){
  //     refreshData()
  //     setRefresh(false)
  //   }
  // },[refresh])
  
  return (
    <div class="container">
      {isLoading  && "supressio.."}
      {error && error.message}
      {recettesGet.isLoading ? <p>Chargement en cours</p>:null}
      {/* <input type="text" value={filterText} onChange={handleChange} /> */}
        <table class="table table-striped">
            <tr>
                
                    <th>id</th>
                    <th>title</th>
                    <th>description</th>
                    <th>url image</th>
                    <th>Modifier</th>
                    <th>Delete</th>
                
            </tr>
            <tbody>

            {/* {mangasData.filter(m=>m.title.indexOf(filterText)!==-1 ).map((m) => ( */}
              {recettesGet.data && recettesGet.data.map((m) => (
                <tr key={m._id}>
                    <td>{m._id}</td>
                    <td>{m.title}</td>
                    <td>{m.description}</td>
                    <td>{m.imageUrl}</td>
                    <td><Link to={"/update/"+m._id} >Modifier</Link></td>
                    <td><button onClick={()=>setRecetteId(m._id)}>Supprimer</button></td>
                    
                </tr>
                    
                ))}
                </tbody>
        </table>
                
                
    </div>
  )
}