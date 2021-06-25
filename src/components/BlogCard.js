import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import stockPressPhoto from '../images/stock_press_image.jpg';

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

export default function BlogCard({ id, title, image, alt, date, categories, tags, intro, content, publication, link, description, removeMe, grabMe, view, type }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      {!link?
      
      <Link to={`/news/${id}`} style={{ textDecoration: 'none', color: 'black' }}>
      <CardActionArea >
          <CardMedia
            className={classes.media}
            image={image ? `${image}` : `${stockPressPhoto}`}
            title={`${alt}`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" style={{ color: '#74b4ab' }}>
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {intro}
            </Typography>
            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
              <Typography gutterBottom variant="body1" component="h2" style={{ textAlign: 'right', fontStyle: 'italic' }}>
                {publication}
              </Typography>
              <Typography gutterBottom variant="body1" component="h2" style={{ textAlign: 'right' }}>
                {date}
              </Typography>
            </div>
            <Typography variant="body1" color="textSecondary" component="p" style={{ textAlign: 'right', paddingTop: '5px', color: 'black' }}>
            </Typography>
            {view === 'admin' ?
              <div>
                <Button size="small" data-id={id} data-title={title} data-image={image} data-alt={alt} data-description={description} data-tags={tags} data-categories={categories} data-date={date} data-intro={intro} data-content={content} data-publication={publication} data-link={link} onClick={removeMe}>Remove {type} </Button>
                <Button size="small" data-id={id} data-title={title} data-image={image} data-alt={alt} data-description={description} data-tags={tags} data-categories={categories} data-date={date} data-intro={intro} data-content={content} data-publication={publication} data-link={link} onClick={grabMe}>Update {type}</Button>
              </div> : <div></div>}
          </CardContent>
        </CardActionArea>
      </Link>
      :
      <a href={link} style={{ textDecoration: 'none', color: 'black' }} target="_blank">
        <CardActionArea >
          <CardMedia
            className={classes.media}
            image={image ? `${image}` : `${stockPressPhoto}`}
            title={`${alt}`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" style={{ color: '#74b4ab' }}>
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {intro}
            </Typography>
            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
              <Typography gutterBottom variant="body1" component="h2" style={{ textAlign: 'right', fontStyle: 'italic' }}>
                {publication}
              </Typography>
              <Typography gutterBottom variant="body1" component="h2" style={{ textAlign: 'right' }}>
                {date}
              </Typography>
            </div>
            <Typography variant="body1" color="textSecondary" component="p" style={{ textAlign: 'right', paddingTop: '5px', color: 'black' }}>
            </Typography>
            {view === 'admin' ?
              <div>
                <Button size="small" data-id={id} data-title={title} data-image={image} data-alt={alt} data-description={description} data-tags={tags} data-categories={categories} data-date={date} data-intro={intro} data-content={content} data-publication={publication} data-link={link} onClick={removeMe}>Remove {type} </Button>
                <Button size="small" data-id={id} data-title={title} data-image={image} data-alt={alt} data-description={description} data-tags={tags} data-categories={categories} data-date={date} data-intro={intro} data-content={content} data-publication={publication} data-link={link} onClick={grabMe}>Update {type}</Button>
              </div> : <div></div>}
          </CardContent>
        </CardActionArea>
      </a>
    }
    </Card>
  );
}
