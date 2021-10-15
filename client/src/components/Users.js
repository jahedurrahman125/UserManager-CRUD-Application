import React, {useEffect, useState} from 'react';
import {Table, TableRow, TableBody, TableHead, TableCell, makeStyles, Button} from '@material-ui/core';
import { getData, deleteData} from '../Api';
import {DeleteForeverOutlined, EditOutlined} from '@material-ui/icons';
import {Link} from 'react-router-dom';


const useStyles = makeStyles({
    table: {
      width: '50%',
      margin: '50px 0 0 25%',
    },
    header:{
        '& > *': {
            fontSize: 20,
            background: '#2F59F9',
            color: 'white'
        }
    },
    content:{
        '& > *': {
            fontSize: 20
        }
    }
  });

const Users = () => {
    const classes = useStyles();
    const [user, setUser] = useState([]);
    useEffect(() => {
        usersData();
    }, []);

    const usersData = async () =>{
        const result = await getData();
        setUser(result.data);
    };
    const deleteById = async (id) => {
        console.log(id)
        await deleteData(id);
        usersData();
    };
    return (
        <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.header}>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>UserName</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
            user.map(user=>(
                <TableRow className={classes.content}>
                    <TableCell>{user._id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.username}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>
                        <Button component={Link} to={`/edit/${user._id}`}>
                            <EditOutlined color="primary"/>
                        </Button>
                        <Button onClick={() => deleteById(user._id)}>
                            <DeleteForeverOutlined color="secondary"/>
                        </Button>
                    </TableCell>
                </TableRow>
            ))
        }
        </TableBody>
      </Table>
    )
}

export default Users;