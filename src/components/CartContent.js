import React from 'react'
import CartCard from './CartCard';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  // flexBox: {
  //   flexGrow: 1,
  //   // backgroundColor: 'salmon',
  //   // height: 200,
  // },
  // control: {
  //   padding: theme.spacing(2),
  // },
  mediaRoot: {
    maxWidth: 750,
  },
  mediaHeight: {
    height: 250
  },
  // formStyle: {
  //   margin: '10px auto',
  //   width: '50%'
  // },
  // inputStyle: {
  //   marginTop: 10,
  //   backgroundColor: 'white',
  //   borderRadius: '0.5em',
  //   width: '75%',
  //   '& label.Mui-focused': {
  //     color: 'black',
  //   },
  //   '& .MuiOutlinedInput-root': {
  //     '&.Mui-focused fieldset': {
  //       borderColor: '#74b4ab',
  //     },
  //   }
  // }
}));
export default function CartContent() {
  const classes = useStyles();

  return (
    <div style={{ width: '60vw' }}>
      <CartCard title='Product 4' classes={classes} sku='4444' price='99.99' shipping='123.12'>
        This is a custom description for Product 4
      </CartCard>
      <CartCard title='Product 4' classes={classes} sku='4444' price='99.99' shipping='123.12'>
        This is a custom description for Product 4
      </CartCard>
      <CartCard title='Product 4' classes={classes} sku='4444' price='99.99' shipping='123.12'>
        This is a custom description for Product 4
      </CartCard>
      <hr></hr>
      <Typography variant='h5' style={{ display: 'inline-block', textAlign: 'right', color: '#74b4ab', width: '80%' }}>
        Shipping Estimate Total:
      </Typography>
      <Typography variant='h6' style={{ display: 'inline-block', textAlign: 'center', width: '20%' }}>
        $XXXX.XX
      </Typography>
      <Typography variant='h5' style={{ display: 'inline-block', textAlign: 'right', color: '#74b4ab', width: '80%' }}>
        Total Cost:
      </Typography>
      <Typography variant='h6' style={{ display: 'inline-block', textAlign: 'center', width: '20%' }}>
        $XXXX.XX
      </Typography>
    </div>
  )
}