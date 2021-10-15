import axios from 'axios';

const url = 'http://localhost:5000/api';

export const getData = async (id) =>{
    id = id || '';
    return await axios.get(`${url}/${id}`)
};

export const postData = async (users) =>{
    return await axios.post(`${url}/add`, users);
};

export const updateData = async (id, users) =>{
    return await axios.put(`${url}/${id}`, users);
};

export const deleteData= async (id) =>{
    return await axios.delete(`${url}/${id}`);
};