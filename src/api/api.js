import axios from 'axios'

export const fetchPokeApi = async (url) =>{
    return await axios.get(url);     
}

