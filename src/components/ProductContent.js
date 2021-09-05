import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard'
import { Container, Grid, Typography, Radio, RadioGroup, FormControlLabel, FormControl } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  flexBox: {
    flexGrow: 1,
    marginBottom: '2rem'
  },
  control: {
    padding: theme.spacing(2),
  },
  mediaRoot: {
    maxWidth: 275,
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
  const [value, setValue] = useState('All')
  const [productState, setFilter] = useState({
    original: products,
    filtered: products
  })

  useEffect(() => {
    setFilter({
      original: products,
      filtered: products
    })
  }, [products])

  const handleChange = (event) => {
    setValue(event.target.value)
    if (event.target.value !== 'All') {
      setFilter({
        ...productState,
        filtered: products.filter(obj => obj.categories.includes(event.target.value))
      })
    } else {
      setFilter({
        ...productState,
        filtered: products
      })
    }
  };

  return (
    <Container>
      <Typography variant='h2' style={{ marginTop: '3rem', marginBottom: '2rem', color: '#74b4ab', display: 'inline-block', width: '50%' }}>
        All Products
      </Typography>
      <Typography style={{ width: '90%', marginBottom: '1rem' }}>
        When it comes to water safety, adequate training and man overboard locator devices can make all the difference. Emerald Marine offers an industry trusted selection of ALERT Man-Overboard Alarm Systems, OSCAR Water Rescue Training Dummies, and other marine products and accessories to add in fall overboard retrieval.
      </Typography>
      <Typography style={{ width: '90%', marginBottom: '1rem' }}>
        Click on any of the products listed below to “Add to Your Cart.” Once you add up the items you'd like to purchase you can get a shipping estimate. Click on the “Submit Request For a Quote” button and our staff will look over your configuration and provide you with a quote specific to your needs.
      </Typography>
      <Typography style={{ width: '90%', marginBottom: '1rem' }}>
        Emerald Marine Products ships internationally. We also have a list of Signed Dealers that sell our life-saving products. Use our "Contact" page to get in touch to discuss the buying and shipping arrangements that work best for you.
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
        <FormControl component="fieldset" style={{ alignItems: 'flex-end' }}>
          <RadioGroup aria-label="products" name="products" value={value} onChange={handleChange} style={{ flexDirection: 'row' }}>
            <FormControlLabel value="All" control={<Radio style={{ color: 'goldenrod' }} />} label="All Products" />
            <FormControlLabel value="Overboard Alerting Products" control={<Radio style={{ color: 'goldenrod' }} />} label="Overboard Alerting Products" />
            <FormControlLabel value="Water Rescue Training" control={<Radio style={{ color: 'goldenrod' }} />} label="Water Rescue Training" />
            <FormControlLabel value="Accessories" control={<Radio style={{ color: 'goldenrod' }} />} label="Accessories" />
          </RadioGroup>
        </FormControl>
      </div>
      <hr style={{ marginBottom: '2em' }}></hr>
      <Grid container className={classes.flexBox} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify='center' spacing={4}>
            {productState.filtered?.map(product => (
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
