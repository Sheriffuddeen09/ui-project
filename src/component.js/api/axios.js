
import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:3500/'
})

export const getPosts = async () =>{
    const response = await api.get('/posts')
    return response.data 
}
export const getBoms = async () =>{
    const response = await api.post('/boms')
    return response.data 
}