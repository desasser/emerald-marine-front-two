import React, { useState, useEffect } from 'react';
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

const BlogContent = ({postContent, addSection}) => {


    const posts = useSelector(state => state.blog.blog);
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [post, setPost] = useState({
        heading: '',
        content: ''
    });
    const [currentSection, setCurrentSection] = useState([])
    
    // const postContent = posts.map(post => JSON.parse(post.content))

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
      setCurrentSection([...currentSection, post])
      console.log(currentSection)
      setPost({
        ...post,
        heading: '',
        content: ''
      })
      // console.log(currentSection);
    }

    return (
        <div>
        <Button size='small' variant="outlined" onClick={handleOpen}>Add Content</Button>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
            
            <form className={classes.dialog} onSubmit={finishSection}>
            <TextField className={classes.inputStyle} id="outlined-basic helperText" label={'heading'} onChange={handleInputChange} value={post.heading} name={'heading'} variant="outlined" multiline={true} style={{'margin-bottom': '2vh'}}></TextField>
            <TextField className={classes.inputStyle} id="outlined-basic helperText" label={'content'} onChange={handleInputChange} value={post.content} name={'content'} variant="outlined" multiline={true} rows={10} style={{'margin-bottom': '2vh'}}></TextField>
            <Button onClick={addSection}>Add Section</Button>
            <Button type='submit' onClick={finishSection}>Save Current Section</Button>
            </form>
        </Dialog>
        </div>
    )
}

export default BlogContent;