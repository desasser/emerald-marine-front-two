import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom'

export default function ProductCard({ classes, price, sku, name, image, alt, }) {

  return (
    <Card className={classes.mediaRoot}>
      <Link to={`/product/${sku}`} style={{ textDecoration: 'none', color: 'black', width: '100%' }}>
        <CardActionArea style={{ display: 'flex', width: '100%', padding: '2rem', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <CardMedia
            className={classes.mediaHeight}
            image={`${image}`}
            title={`${alt}`}
          />
          <CardContent style={{ display: 'flex'}}>
            <Typography gutterBottom variant="h6" component="h2" style={{ color: '#74b4ab'}}>
              {name}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body1" color="textSecondary" component="p" style={{ textAlign: 'right', paddingTop: '5px', color: 'black', alignSelf: 'flex-end' }}>
              {`$${price}`}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
