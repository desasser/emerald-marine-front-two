import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      marginTop: 10,
      marginBottom: 10,
    },
  },
  button: {
    backgroundColor: 'goldenrod',
    height: 56,
  },
  input: {
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: '0.5em',
    '& label.Mui-focused': {
      color: '#74b4ab',
      backgroundColor: 'white'
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#74b4ab',
      },
    }
  }
}));

export default function SearchBar({keyword, onChange}) {
  const classes = useStyles();

  return (
    <form 
      className={classes.root} 
      noValidate 
      autoComplete="off" 
    >
      <TextField 
        id="variant-basic" 
        label="begin typing to search..." 
        variant="outlined" 
        onChange={(event) => onChange(event.target.value)} 
        value={keyword} 
        className={classes.input} 
      />
    </form>
  );
}