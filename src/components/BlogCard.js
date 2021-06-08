import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
  },
  media: {
    height: 245,
  },
});

export default function BlogCard({ children, num, title }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea href={`/blog${num}`}>
        <CardMedia
          className={classes.media}
          image="https://loremflickr.com/320/240"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {children}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p" style={{ textAlign: 'right', paddingTop: '5px', color: 'black' }}>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
