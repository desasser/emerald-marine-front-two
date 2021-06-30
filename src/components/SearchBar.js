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
      // onSubmit={(event) => updateInput(event.target.value)} 
    >
      <TextField 
        id="variant-basic" 
        label="search..." 
        variant="outlined" 
        onChange={(event) => onChange(event.target.value)} 
        value={keyword} 
        className={classes.input} 
      />
      <div>
        <Button
          // onClick={(event) => updateInput(event.target.value)}
          variant="contained"
          color="primary"
          className={classes.button}
        >
          <SearchIcon fontSize="large" />
          Search
        </Button>
      </div>
    </form>
  );
}