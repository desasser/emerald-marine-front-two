import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, Typography, Button } from '@material-ui/core';
import DeleteConfirmation from './DeleteConfirmation';

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

const MailingCard = ({first, last, company, email, id, grabMe, confirm}) => {
    const classes = useStyles();

    return ( 
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary">
              Email:
            </Typography>
            <Typography variant="h5" component="h2">
              {email}
            </Typography>
            <Typography className={classes.title} color="textSecondary">
              Company:
            </Typography>
            <Typography variant="h5" component="h2">
              {company}
            </Typography>
            <Typography className={classes.title} color="textSecondary">
              Name:
            </Typography>
            <Typography variant="h5" component="h2">
              {`${first} ${last}`}
            </Typography>
          </CardContent>
          <CardActions>
          <DeleteConfirmation text='Unsubscribe' confirm={confirm} id={email}/>
            <Button size="small" variant='outlined' data-first={first} data-last={last} data-company={company} data-email={email} data-id={id} onClick={grabMe}>Edit Subscriber Info</Button>
          </CardActions>
        </Card>
      ); 
} 

export default MailingCard;