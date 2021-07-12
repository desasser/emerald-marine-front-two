import React, { useState, forwardRef, useImperativeHandle} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, DialogTitle, Dialog} from '@material-ui/core';
import {useSelector} from 'react-redux';
import store from '../../utils/store';

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

const BlogContent = forwardRef(({text}, ref) => {
    const blogContent = useSelector(state => state.blogContent.blogContent)
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [post, setPost] = useState({
        heading: '',
        content: ''
    });

    const handleInputChange = e => {
        const {name, value} = e.target;
        setPost({
            ...post, 
            [name]: value
        });
    }

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const finishSection = e => {
      e.preventDefault();
      const newContent = [...blogContent, post]
      store.dispatch({
        type: 'ADD_CONTENT',
        payload: newContent
      })
      console.log(newContent)
      setPost({
        ...post,
        heading: '',
        content: ''
      })
      handleClose()
    }

    const editExistingContent = (heading, content) => {
      setPost({
        ...post,
        heading: heading,
        content: content
      })
    }
    
    useImperativeHandle(ref, () => {
      return {
        editExistingContent: editExistingContent
      }
    });

    return (
        <div>
        <Button size='small' variant="outlined" onClick={handleOpen}>{text}</Button>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
            
            <form className={classes.dialog} onSubmit={finishSection}>
            <TextField className={classes.inputStyle} id="outlined-basic helperText" label={'heading'} onChange={handleInputChange} value={post.heading} name={'heading'} variant="outlined" multiline={true} style={{'margin-bottom': '2vh'}}></TextField>
            <TextField className={classes.inputStyle} id="outlined-basic helperText" label={'content'} onChange={handleInputChange} value={post.content} name={'content'} variant="outlined" multiline={true} rows={10} style={{'margin-bottom': '2vh'}}></TextField>
            <Button type='submit' onClick={finishSection}>Save Current Section</Button>
            </form>
        </Dialog>
        </div>
    )
})

export default BlogContent;