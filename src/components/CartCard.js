import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    margin: '20px'
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function CartCard({ children, price, shipping, sku, title }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://loremflickr.com/320/240" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs >
                <Typography gutterBottom variant="h4" style={{marginTop: '10px'}}>
                  {title}
                </Typography>
                {/* <Typography variant="body2" style={{width: '300px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', display: 'inline-block'}} gutterBottom>
                  {children}
                </Typography> */}
              </Grid>
              <Grid item>
                <Typography variant="body2" color="textSecondary">
                  SKU: {sku}
                </Typography>
                <Typography variant="body2" style={{ cursor: 'pointer', marginBottom: '10px' }}>
                  Remove
                </Typography>
              </Grid>
            </Grid>
            <Grid item style={{ display: 'flex', flexDirection:'column', height:'100%', justifyContent:'space-between'}}>
              <Typography variant="subtitle1" style={{ textAlign: 'right'}}>${price}</Typography>
              <Typography variant="subtitle1">Shipping Estimate: ${shipping}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}