import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom'

export default function ProductCard({ children, view, removeMe, grabMe, classes, price, sku, name, image, alt, description, tags, categories, video, weight, length, width, height, id }) {

  return (
    <Card className={classes.mediaRoot}>
      <Link to={`/product/${sku}`} style={{ textDecoration: 'none', color: 'black' }}>
        <CardActionArea>
          <CardMedia
            className={classes.mediaHeight}
            image={`${image}`}
            title={`${alt}`}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2" style={{ color: '#74b4ab', height: '100px' }}>
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" style={{ height: '55px', overflow: 'hidden', textOverflow: 'ellipsis'}}>
              {description}
            </Typography>
            {view === 'admin' ?
              <div style={{'margin-top': '5vh'}}>
                <Button size="small" data-id={id} data-name={name} data-price={price} data-image={image} data-alt={alt} data-description={description} data-tags={tags} data-categories={categories} data-video={video} data-weight={weight} data-length={length} data-width={width} data-height={height} data-sku={sku} onClick={removeMe}>Remove Product </Button>
                <Button size="small" data-id={id} data-name={name} data-price={price} data-image={image} data-alt={alt} data-description={description} data-tags={tags} data-categories={categories} data-video={video} data-weight={weight} data-length={length} data-width={width} data-height={height} data-sku={sku} onClick={grabMe}>Update Product Info</Button>
              </div> : <div></div>}
          </CardContent>
          <CardContent>
            <Typography variant="body1" color="textSecondary" component="p" style={{ textAlign: 'right', paddingTop: '5px', color: 'black' }}>
              {`$${price}`}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
