import React, {useState} from "react";
import {useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import API from '../utils/API';
import AdminButton from '../components/AdminButton';

const useStyles = makeStyles(() => ({
    logout: {
       backgroundColor: 'salmon'
    }

}))

const Admin = () => {
    let history = useHistory();
    const classes = useStyles();


    const handleLogout = () => {
        localStorage.removeItem('token');
        history.push('/login');
    }
    
    return (
        <div>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <h1>Admin Dashboard</h1>
                <AdminButton text='Logout' handleClick={handleLogout}/>
            </Grid>
        </Grid>

        </div>
    )
}

export default Admin;