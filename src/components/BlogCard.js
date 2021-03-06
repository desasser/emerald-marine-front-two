import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import stockPressPhoto from '../images/stock_press_image.jpg';
import DeleteConfirmation from '../components/admin/DeleteConfirmation';

const useStyles = makeStyles({
  root: {
    maxWidth: 750,
    flex: 'wrap',
    margin: '0 auto'
  },
  media: {
    height: 245,
  },
});

export default function BlogCard({ id, title, image, alt, date, categories, tags, intro, content, publication, link, description, grabMe, view, type, confirm, margin }) {
  const classes = useStyles();
  
  return (
    <Card className={classes.root} style={{ marginTop: `${margin}` }}>

      {view === 'admin' ?
        <CardActionArea >
          <Grid container>
            <Grid item xs={4}>
              <CardMedia
                className={classes.media}
                image={image ? `${image}` : `${stockPressPhoto}`}
                title={`${alt}`}
              />
            </Grid>
            <Grid item xs={8}>
              <CardContent>
                <Typography gutterBottom variant="h4" style={{ color: '#74b4ab' }}>
                  {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {intro?.substring(0, 200)}
                </Typography>
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', marginTop: '1em' }}>
                  <Typography gutterBottom variant="body1" style={{ textAlign: 'right', fontStyle: 'italic' }}>
                    {publication ? publication : 'Emerald Marine Products'}
                  </Typography>
                  <Typography gutterBottom variant="body1" style={{ textAlign: 'right' }}>
                    {date.split('T')[0]}
                  </Typography>
                </div>
                <Typography variant="body1" color="textSecondary" component="p" style={{ textAlign: 'right', paddingTop: '5px', color: 'black' }}>
                </Typography>
                <Grid container>
                  <Grid item xs={6}>
                    <DeleteConfirmation text={`Delete ${type}`} confirm={confirm} id={id} />
                  </Grid>
                  <Grid item xs={6}>
                    <Button size="small" variant='outlined' data-id={id} data-title={title} data-image={image} data-alt={alt} data-description={description} data-tags={tags} data-categories={categories} data-date={date} data-intro={intro} data-content={content} data-publication={publication} data-link={link} onClick={grabMe} style={{ backgroundColor: '#f5ed5e', padding: '5px 15px', border: 'none', boxShadow: 'rgb(0 0 0 / 30%) 1px 1px 1px 1px', margin: 5, fontSize: '0.875rem' }}>Update {type}</Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Grid>
          </Grid>
        </CardActionArea>
        : !link ?
          <Link to={`/news/${id}`} style={{ textDecoration: 'none', color: 'black' }}>
            <CardActionArea >
              <CardMedia
                className={classes.media}
                image={image ? `${image}` : `${stockPressPhoto}`}
                title={`${alt}`}
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="h2" style={{ color: '#74b4ab' }}>
                  {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {intro ?
                    <Typography variant="body2" color="textSecondary" component="p">
                      {intro?.substring(0, 500)}...
                    </Typography>
                    :
                    <Typography variant="body2" color="textSecondary" component="p">
                      Read More...
                    </Typography>}
                </Typography>
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', marginTop: '1em' }}>
                  <Typography gutterBottom variant="body1" component="h2" style={{ textAlign: 'right', fontStyle: 'italic' }}>
                    {publication ? publication : 'Emerald Marine Products'}
                  </Typography>
                  <Typography gutterBottom variant="body1" component="h2" style={{ textAlign: 'right' }}>
                    {date.split('T')[0]}
                  </Typography>
                </div>
              </CardContent>
            </CardActionArea>
          </Link>
          :
          <a href={link} style={{ textDecoration: 'none', color: 'black' }} target="_blank" rel="noreferrer">
            <CardActionArea >
              <CardMedia
                className={classes.media}
                image={image ? `${image}` : `${stockPressPhoto}`}
                title={`${alt}`}
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="h2" style={{ color: '#74b4ab' }}>
                  {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" style={{ marginBottom: '1rem'}}>
                  {description?.substring(0, 500)}
                </Typography>
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                  <Typography gutterBottom variant="body1" component="h2" style={{ textAlign: 'right', fontStyle: 'italic' }}>
                    {publication}
                  </Typography>
                  <Typography gutterBottom variant="body1" component="h2" style={{ textAlign: 'right' }}>
                    {date.split('T')[0]}
                  </Typography>
                </div>
                <Typography variant="body1" color="textSecondary" component="p" style={{ textAlign: 'right', paddingTop: '5px', color: 'black' }}>
                </Typography>
              </CardContent>
            </CardActionArea>
          </a>
      }
    </Card>
  );
}
