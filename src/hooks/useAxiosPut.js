import { useEffect, useState } from "react";
import axios from 'axios'

export default function useAxiosPut(url, payload,headers=null){
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

   const putData =()=> {
        axios.put(url, payload,headers)
            .then(response => setData(response.data))
            .catch(error => setError(error.message))
            .finally(()=> setIsLoading(false))
    }

    return {data,error, isLoading,putData}
}