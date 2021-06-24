import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom"
import { Grid, Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cardWrapper: {
    flexGrow: '1',
    marginTop: 20
  },
  control: {
    padding: theme.spacing(2),
  },
  root: {
    width: '80%',

  }
}));

export default function BlogBanner() {
  const classes = useStyles();
  const blog = useSelector(state => state.blog.blog)
  const pr = useSelector(state => state.pressReleases.pressReleases)
  const news = useSelector(state => state.newsArticles.newsArticles)

  const allPosts = blog.concat(pr, news);

  const allSorted = allPosts.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  })

  const post = allSorted[0];
  console.log('most recent post', post)

  return (
    <div style={{ height: '150px', width: '50vw', padding: '20px',}}>
      <Grid item xs={12} style={{display: 'flex', justifyContent: 'flex-end'}}>
        {post ? 
        (<Card className={classes.root} elevation={0}>
          <Link to={`/news/${post._id}`} style={{ textDecoration: 'none', color: 'black' }}>
            <CardActionArea >
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" style={{color: '#74b4ab'}}>
                  {post.title}
                </Typography>
                <Typography gutterBottom variant="body2" component="h2" style={{ textAlign: 'right' }}>
                  {post.date}
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p" style={{ textAlign: 'right', paddingTop: '5px', color: 'black' }}>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>)
        :
        <Typography variant="h5" style={{color: '#74b4ab'}}>Loading...</Typography>}
      </Grid>
    </div>
  )
}