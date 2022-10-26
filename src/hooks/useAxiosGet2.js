import { useEffect, useState } from "react";
import axios from 'axios'

export default function useAxiosGet2(url){
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        axios.get(url)
            .then(response => setData(response.data))
            .catch(error => setError(error.message))
            .finally(()=> setIsLoading(false))
    },[])

    return {data,error, isLoading}
}