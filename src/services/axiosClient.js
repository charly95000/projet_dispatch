import axios from "axios"

export const getRequest = (URL)=>{
    return axios.get(URL).then(response=>response);
}