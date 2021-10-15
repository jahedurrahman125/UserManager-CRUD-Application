import React, {useState, useEffect} from 'react';
import {Typography, FormGroup, FormControl, InputLabel, Input, Button, makeStyles} from '@material-ui/core';
import {postData, getData, updateData} from '../Api';
import {useHistory, useParams} from 'react-router-dom';

const useStyles = makeStyles({
    forms: {
      width: '50%',
      margin: '5% 0 0 25%',
      fontSize: 20,
        '& > *': {
            marginTop: 20,
        }
    }
});

const formVal = {
    name:'',
    username: '',
    email:'',
    phone:''
}
const EditUser = () => {
    const [users, setUsers] = useState(formVal);
    const {name, username, email, phone} = users;
    const { id } = useParams();
    const classes = useStyles();
    const history = useHistory();

    useEffect(() => {
        dataLoad();
    }, []);

    const dataLoad = async() => {
        const results = await getData(id);
        setUsers(results.data);
    };

    const editFunction = async() => {
        await updateData(id, users);
        history.push('/');
    };

    const valueChange = (e) =>{
        setUsers({...users, [e.target.name]: e.target.value });
    };

    return (
        <FormGroup className={classes.forms}>
        <Typography variant="h4">Edit User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => valueChange(e)} name='name' value={name}/>
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e) => valueChange(e)} name='username' value={username}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => valueChange(e)} name='email' value={email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => valueChange(e)} name='phone' value={phone}/>
            </FormControl>
            <Button variant="contained" color="primary" onClick={() => editFunction()}>Edit User</Button>
        </FormGroup>
    )
}

export default EditUser;