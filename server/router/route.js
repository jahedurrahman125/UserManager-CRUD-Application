import express from 'express';
import {
    getData,
    addUser,
    getUserById,
    updateUser,
    deleteUser
} from '../controller/user-controler.js';

const route = express.Router();

route.get('/', getData);
route.post('/add', addUser);
route.get('/:id', getUserById);
route.put('/:id', updateUser);
route.delete('/:id', deleteUser);

export default route;