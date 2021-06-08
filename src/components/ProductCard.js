import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';

export default function ProductCard({ children, classes, price, sku, title }) {

  return (
    <Card className={classes.mediaRoot}>
      <CardActionArea href={`/product${sku}`}>
        <CardMedia
          className={classes.mediaHeight}
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
            {`$${price}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
