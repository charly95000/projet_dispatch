import { useEffect, useState } from "react";
import axios from 'axios'

export default function useAxiosPost(url, payload,headers=null){
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

   const postData =async ()=> {
        await axios.post(url, payload,headers)
            .then(response => setData(response.data))
            .catch(error => setError(error.message))
            .finally(()=> setIsLoading(false))
    }

    return {data,error, isLoading,postData}
}