import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom"
import { Grid, Card, CardActionArea, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cardWrapper: {
    flexGrow: '1',
    marginTop: 20
  },
  control: {
    padding: theme.spacing(2),
  },
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

  return (
    <div style={{ height: '250px', padding: '20px', }}>
      <Grid item xs={12}>
        {post ?
          (<Card className={classes.root} elevation={0}>
            <Link to={`/news/${post._id}`} style={{ textDecoration: 'none', color: 'black' }}>
              <CardActionArea >
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" style={{ color: '#74b4ab' }}>
                    {post.title}
                  </Typography>
                  <Typography gutterBottom variant="body1" style={{ overflow: 'hidden', height: '6em' }}>
                    {post.intro}
                  </Typography>
                  <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', marginTop: '1em' }}>
                    <Typography gutterBottom variant="body1" component="h2" style={{ textAlign: 'right', fontStyle: 'italic' }}>
                      {post.publication ? post.publication : 'Emerald Marine Products'}
                    </Typography>
                    <Typography gutterBottom variant="body2" style={{ textAlign: 'right' }}>
                      {post.date.split('T')[0]}
                    </Typography>
                  </div>
                  <Typography variant="body1" color="textSecondary" component="p" style={{ textAlign: 'right', paddingTop: '5px', color: 'black' }}>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>)
          :
          <Typography variant="h5" style={{ color: '#74b4ab' }}>Loading...</Typography>}
      </Grid>
    </div>
  )
}