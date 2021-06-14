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

export default function BlogCard({ children, id, title, image, alt }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea href={`/blog${id}`}>
        <CardMedia
          className={classes.media}
          image={`${image}`}
          title={`${alt}`}
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
