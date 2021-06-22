import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard'
import InputForm from '../components/InputForm'
import { Container, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  flexBox: {
    flexGrow: 1,
    // backgroundColor: 'salmon',
    // height: 200,
  },
  control: {
    padding: theme.spacing(2),
  },
  mediaRoot: {
    maxWidth: 350,
    height: 500
  },
  mediaHeight: {
    height: 250
  },
  formStyle: {
    margin: '10px 0',
    width: '50%'
  },
  inputStyle: {
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: '0.5em',
    width: '75%',
    '& label.Mui-focused': {
      color: 'black',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#74b4ab',
      },
    }
  }
}));

export default function ProductContent() {
  const classes = useStyles();
  const products = useSelector(state => state.products.products)
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
    checkedC: true
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const categories = ['Man-Overboard', 'Marine Safety', 'Water Rescue Training']

  return (
    <Container style={{ marginTop: '1.5em' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', width: '100%', justifyContent: 'space-between' }}>
        <Typography variant='h2' style={{ marginTop: '50px', color: '#74b4ab', display: 'inline-block' }}>All Products</Typography>
        <div>
          <Checkbox
            checked={state.checkedA}
            onChange={handleChange}
            color="default"
            name="checkedA"
            inputProps={{ 'aria-label': `Man-Overboard checkbox` }}
          />
          <Typography component="span">Man-Overboard</Typography>
          <Checkbox
            checked={state.checkedB}
            onChange={handleChange}
            color="default"
            name="checkedB"
            inputProps={{ 'aria-label': `Marine Safety checkbox` }}
          />
          <Typography component="span">Marine Safety</Typography>
          <Checkbox
            checked={state.checkedC}
            onChange={handleChange}
            color="default"
            name="checkedC"
            inputProps={{ 'aria-label': `Water Rescue Training checkbox` }}
          />
          <Typography component="span">Water Rescue Training</Typography>
        </div>
      </div>
      <hr style={{ marginBottom: '2em' }}></hr>
      <Grid container className={classes.flexBox} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify='center' spacing={4}>
            {products?.map(product => (
              <Grid key={product._id} item>
                <ProductCard name={product.name} classes={classes} sku={product.SKU} price={product.price} image={product.image} alt={product.alt}>{product.description.split('.')[0]} </ProductCard>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}
