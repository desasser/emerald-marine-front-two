import React from 'react'
import ProductCard from '../components/ProductCard'
import InputForm from '../components/InputForm'
import { Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

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
  },
  mediaHeight: {
    height: 250
  },
  formStyle: {
    margin: '10px auto',
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

  return (
    <Container style={{ marginTop: '20px' }}>
      <InputForm classes={classes} text={''} label={'search...'} buttonText={'search'}/>
      <hr></hr>
      <Grid container className={classes.flexBox} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify='center' spacing={4}>
            <Grid item>
              <ProductCard title='Product 1' classes={classes} sku='1111' price='99.99'>This is a custom description for Product 1, Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters. </ProductCard>
            </Grid>
            <Grid item>
              <ProductCard title='Product 2' classes={classes} sku='2222' price='99.99'>This is a custom description for Product 2, Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.</ProductCard>
            </Grid>
            <Grid item>
              <ProductCard title='Product 3' classes={classes} sku='3333' price='99.99'>This is a custom description for Product 3, Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.</ProductCard>
            </Grid>
            <Grid item>
              <ProductCard title='Product 4' classes={classes} sku='4444' price='99.99'>This is a custom description for Product 4, Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.</ProductCard>
            </Grid>
            <Grid item>
              <ProductCard title='Product 5' classes={classes} sku='5555' price='99.99'>This is a custom description for Product 5, Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.</ProductCard>
            </Grid>
            <Grid item>
              <ProductCard title='Product 6' classes={classes} sku='6666' price='99.99'>This is a custom description for Product 6, Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.</ProductCard>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}
