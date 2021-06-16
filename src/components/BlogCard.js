import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
  },
  media: {
    height: 245,
  },
});

export default function BlogCard({ children, id, title, image, alt, date, categories, tags, intro, content, publication, link, description, removeMe, grabMe, view, type }) {
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
            {intro}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p" style={{ textAlign: 'right', paddingTop: '5px', color: 'black' }}>
          </Typography>
          {view==='admin' ? 
          <div>
            <Button size="small" data-id={id} data-title={title} data-image={image} data-alt={alt} data-description={description} data-tags={tags} data-categories={categories} data-date={date} data-intro={intro} data-content={content} data-publication={publication} data-link={link} onClick={removeMe}>Remove {type} </Button>
            <Button size="small" data-id={id} data-title={title} data-image={image} data-alt={alt} data-description={description} data-tags={tags} data-categories={categories} data-date={date} data-intro={intro} data-content={content} data-publication={publication} data-link={link} onClick={grabMe}>Update {type}</Button>
          </div> : <div></div>}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
