import axios from "axios"
import { useEffect, useState } from "react"

export default function useAxiosGet(url){
    const [data, setData] = useState()
    const [isLoading,setIsLoading] = useState(true)
    const [error,setError] = useState()
    const  getRequest = () =>{
        axios.get(url)
            .then(response => setData(response.data))
            .catch(error => setError(error.message))
            .finally(()=>setIsLoading(false))
    }
    useEffect(()=>{
        getRequest()
    },[])

    return {data, error, isLoading, getRequest }
}