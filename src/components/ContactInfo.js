import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  styleDetails: {
    color: 'white', 
    textAlign: 'right',
    [theme.breakpoints.down("sm")]: {
      textAlign: 'center'
    },
  },
}));

export default function ContactInfo() {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="body1" component="p" className={classes.styleDetails}><strong>Toll Free US and Canada:</strong> +1 800.426.4201</Typography>
      <Typography variant="body1" component="p" className={classes.styleDetails}><strong>Telephone:</strong> +1 206.965.8207</Typography>
      <Typography variant="body1" component="p" className={classes.styleDetails}><strong>Email:</strong> info@emeraldmarineproducts.com</Typography>
    </div>
  )
}