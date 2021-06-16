import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const MailingCard = ({name, email, id, removeMe, grabMe}) => {
    const classes = useStyles();

    return ( 
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Name:
            </Typography>
            <Typography variant="h5" component="h2">
              {name}
            </Typography>
            <Typography className={classes.title} color="textSecondary">
              Email:
            </Typography>
            <Typography variant="h5" component="h2">
              {email}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" data-name={name} data-email={email} data-id={id} onClick={removeMe}>Remove from List</Button>
            <Button size="small" data-name={name} data-email={email} data-id={id} onClick={grabMe}>Edit Subscriber Info</Button>
          </CardActions>
        </Card>
      ); 
} 

export default MailingCard;