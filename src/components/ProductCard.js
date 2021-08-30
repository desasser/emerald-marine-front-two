import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom'
import DeleteConfirmation from '../components/admin/DeleteConfirmation';

export default function ProductCard({ children, view, grabMe, classes, price, sku, name, image, alt, description, tags, categories, video, weight, length, width, height, id, confirm, details }) {

  return (
    <Card className={classes.mediaRoot}>
      {view === 'admin' ?
        <CardActionArea>
          <Grid container>
            <Grid item xs={4}>
              <CardMedia
                className={classes.mediaHeight}
                image={`${image}`}
                title={`${alt}`}
              />
            </Grid>
            <Grid item xs={8}>
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2" style={{ color: '#74b4ab' }}>
                  {name}
                </Typography>
                {children ? <Typography variant="body2" color="textSecondary" component="p" style={{ height: '55px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {children}
                </Typography> : null}
                <Grid container style={{ 'margin-top': '5vh' }}>
                  <Grid item xs={6}>
                    <DeleteConfirmation text='Delete Product' confirm={confirm} id={id} />
                  </Grid>
                  <Grid item xs={6}>
                    <Button size="small" variant='outlined' data-id={id} data-name={name} data-price={price} data-image={image} data-alt={alt} data-description={description} data-tags={tags} data-categories={categories} data-video={video} data-weight={weight} data-details={details} data-length={length} data-width={width} data-height={height} data-sku={sku} onClick={grabMe} style={{ backgroundColor: '#f5ed5e', margin: '5px', border: 'none', boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, .3)' }}>Update Product Info</Button>
                  </Grid>
                  <Grid item xs={12}>
                    <CardContent>
                      <Typography variant="body1" color="textSecondary" component="p" style={{ textAlign: 'right', paddingTop: '5px', color: 'black' }}>
                        {`$${price}`}
                      </Typography>
                    </CardContent>
                  </Grid>
                </Grid>
              </CardContent>
            </Grid>
          </Grid>
        </CardActionArea> :

        //  Non-admin view
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
              <Typography variant="body2" color="textSecondary" component="p" style={{ height: '55px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {children}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body1" color="textSecondary" component="p" style={{ textAlign: 'right', paddingTop: '5px', color: 'black' }}>
                {`$${price}`}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>}
    </Card>

  );
}
