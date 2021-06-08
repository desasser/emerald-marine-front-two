import React from 'react'
import CartCard from './CartCard';
import { makeStyles } from '@material-ui/core/styles';

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
    <div style={{width: '60vw'}}>
      <CartCard title='Product 4' classes={classes} sku='4444' price='99.99'>This is a custom description for Product 4, Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.</CartCard>
      <CartCard title='Product 4' classes={classes} sku='4444' price='99.99'>This is a custom description for Product 4, Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.</CartCard>
      <CartCard title='Product 4' classes={classes} sku='4444' price='99.99'>This is a custom description for Product 4, Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.</CartCard>
    </div>
  )
}