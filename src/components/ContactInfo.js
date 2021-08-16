import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  styleDetails: {
    textAlign: 'right',
    fontSize: '1.5em',
    [theme.breakpoints.down("sm")]: {
      textAlign: 'center'
    },
  },
}));

export default function ContactInfo({ color }) {
  const classes = useStyles();
  return (
    <div>
      <div>
        <Typography variant="h6" component="span" className={classes.styleDetails} style={{ fontWeight: 'bold', color: `${color}` }}>
          Toll Free US and Canada: 
        </Typography>
        <Typography variant="h6" component="span" className={classes.styleDetails} style={{marginLeft: '0.5rem', color: `${color}`}}>
          +1 800.426.4201
        </Typography>
      </div>
      <div>
        <Typography variant="h6" component="span" className={classes.styleDetails} style={{ fontWeight: 'bold', color: `${color}` }}>
          Telephone: 
        </Typography>
        <Typography variant="h6" component="span" className={classes.styleDetails} style={{marginLeft: '0.5rem', color: `${color}`}}>
          +1 206.965.8207
        </Typography>
      </div>
      <div>
        <Typography variant="h6" component="span" className={classes.styleDetails} style={{ fontWeight: 'bold', color: `${color}` }}>
          Email: 
        </Typography>
        <Typography variant="h6" component="span" className={classes.styleDetails} style={{marginLeft: '0.5rem', color: `${color}`}}>
          info@emeraldmarineproducts.com
        </Typography>
      </div>
    </div>
  )
}