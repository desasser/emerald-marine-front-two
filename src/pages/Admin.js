import React, {useState} from "react";
import {useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import API from '../utils/API';


const Admin = () => {
    let history = useHistory();

    const handleLogout = () => {
        localStorage.removeItem('token');
        history.push('/login');
    }
    
    return (
        <div>
        <h1>Here's your dumb admin dashboard dummy</h1>
        <Button variant="contained" onClick={handleLogout} >Logout</Button>
        </div>
    )
}

export default Admin;