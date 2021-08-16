import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Dialog} from '@material-ui/core';
import API from '../../utils/API';
import {useHistory} from 'react-router-dom'
import ProgressIndicator from './ProgressIndicator';

const useStyles = makeStyles((theme) => ({    
    inputStyle: {
      marginTop: 10,
      backgroundColor: 'white',
      borderRadius: '0.5em',
      width: '80%',
      '& label.Mui-focused': {
        color: 'black',
        backgroundColor: 'white'
      },
      '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
          borderColor: '#74b4ab',
        },
      }
    },
    dialog: {
        minHeight: '50vh',
        minWidth: '50vw',
        padding: 50
    }
  }));

const CreateNewUser = () => {
    const classes = useStyles();
    let history = useHistory();
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [indicator, setIndicator] = useState({
        open: false,
        severity: '',
        message: ''
    })

    const token = localStorage.getItem('token');

    const handleInputChange = e => {
        const {name, value} = e.target;
        setUser({
            ...user, 
            [name]: value
        });
    }

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const createNewUser = e => {
        e.preventDefault();
        API.addNewUser(token, user).then(res => {
            if(res.status==200) {
                setIndicator({
                    open: true,
                    severity: 'success',
                    message: 'New user created successfully. Please login when directed.'
                })
            }
        }).catch(err => {
            if(err) {
                setIndicator({
                    open: false,
                    severity: 'error',
                    message: `Error creating new user: ${err.message}`
                })
            }
        });
        setUser({
            username: '',
            email: '',
            password: ''
        })
        handleClose();
        setTimeout(function(){history.push('/login')}, 5000)
    }

    return (
        <div>
            <ProgressIndicator open={indicator.open} message={indicator.message} severity={indicator.severity} handleClose={handleClose}></ProgressIndicator>
        <Button style={{ margin: '5px', backgroundColor: '#f5ed5e', height:'50px', fontSize: '1rem', boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, .3)', border: 'none' }}  onClick={handleOpen}>New User</Button>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
            
            <form className={classes.dialog} onSubmit={createNewUser}>
            <TextField className={classes.inputStyle} id="outlined-basic helperText" label={'Username'} onChange={handleInputChange} value={user.username} name={'username'} variant="outlined" style={{'margin-bottom': '2vh'}}></TextField>
            <TextField className={classes.inputStyle} id="outlined-basic helperText" label={'Email'} onChange={handleInputChange} value={user.email} name={'email'} variant="outlined" style={{'margin-bottom': '2vh'}}></TextField>
            <TextField className={classes.inputStyle} id="outlined-basic helperText" label={'Password'} onChange={handleInputChange} value={user.password} name={'password'} type='password' variant="outlined" style={{'margin-bottom': '2vh'}}></TextField>
            <br />
            <Button type='submit' onClick={createNewUser} style={{ backgroundColor: '#f5ed5e', margin: '5px', boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, .3)', border: 'none' }} variant="outlined">Create User</Button>
            </form>
        </Dialog>
        </div>
    )

}

export default CreateNewUser;