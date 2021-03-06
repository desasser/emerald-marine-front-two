import React, {useState, useEffect} from "react";
import {useHistory} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import API from '../utils/API';

const AdminLogin = () => {
    let history = useHistory();

    useEffect(() => {
        API.greeting().then(res => {
        });
    }, [localStorage.getItem('token')]);

    const [user, setUser] = useState({
        username: '',
        password: '',
        token: ''
    });

    const [login, setLogin] = useState({
        username: '',
        password: ''
    });

    const handleInputChange = e => {
        const {name, value} = e.target;
        setLogin({
            ...login,
            [name]: value
        });
    }

    const wrongLogin = () => {
        setUser({
            username: '',
            password: '',
            token: ''
        });
        localStorage.removeItem('token');
        alert('Username or password is incorrect!')
    }

    const handleSubmit = e => {
        e.preventDefault();
        API.loginUser(login).then(res => {
            localStorage.setItem('token', res.data.token);
            setUser({
                username: res.data.username,
                password: res.data.password,
                token: res.data.token
            });
            setLogin({
                username: '',
                password: ''
            });
            history.push('/admin')
        }).catch(err => {
            err ? wrongLogin() : history.push('/admin')
        }); 
    }
    
    return (
        <form  noValidate autoComplete="off" style={{marginTop: '10vh', minHeight: '50vh'}} onSubmit={handleSubmit}>
            <h1>Please login as an administrator to proceed.</h1>
            <TextField id="outlined-basic" label="Username" variant="outlined" name="username" onChange={handleInputChange} style={{margin: '1rem'}}/>
            <TextField id="outlined-basic" label="Password" type='password' variant="outlined" name="password" onChange={handleInputChange} style={{margin: '1rem'}}/>
            <br />
            <Button type='submit' variant="contained"  style={{ backgroundColor: '#f5ed5e', margin: '2rem', width: '25%', height: '3rem'}} >Submit</Button>
        </form>
    )
}

export default AdminLogin;