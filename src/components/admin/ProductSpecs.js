import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Dialog} from '@material-ui/core';
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

const ProductSpecs = ({text, heading, content, number}) => {
    const productSpecs = useSelector(state => state.productSpecs.productSpecs);
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [product, setProduct] = useState({
        heading: heading,
        content: content
    });
    const handleInputChange = e => {
        const {name, value} = e.target;
        setProduct({
            ...product, 
            [name]: value
        });
    }

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const finishSpecs = e => {
        e.preventDefault();
        let newSpecs = productSpecs;
        if(number < 0) {
            newSpecs = [...productSpecs, product]
           } else {
             newSpecs.splice(number, 1, product)
             
           }
           store.dispatch({
             type: 'EDIT_SPECS',
             payload: [...newSpecs]
           })
           console.log(newSpecs)
           console.log(productSpecs)
           if(!number || number!==0) {
             setProduct({
               ...product,
               heading: '',
               content: ''
             })
           }
           handleClose()
    }

    return (
        <div>
        <Button size='small' variant="outlined" onClick={handleOpen}>{text}</Button>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
            
            <form className={classes.dialog} onSubmit={finishSpecs}>
            <TextField className={classes.inputStyle} id="outlined-basic helperText" label={'heading'} onChange={handleInputChange} value={product.heading} name={'heading'} variant="outlined" multiline={true} style={{'margin-bottom': '2vh'}}></TextField>
            <TextField className={classes.inputStyle} id="outlined-basic helperText" label={'content'} onChange={handleInputChange} value={product.content} name={'content'} variant="outlined" multiline={true} rows={10} style={{'margin-bottom': '2vh'}}></TextField>
            <Button type='submit' onClick={finishSpecs}>Save Current Section</Button>
            </form>
        </Dialog>
        </div>
    )

}

export default ProductSpecs;