import React from 'react'
import BlogCard from '../components/BlogCard'
import { Container, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import store from '../utils/store';

const useStyles = makeStyles((theme) => ({
  cardWrapper: {
    flexGrow: '1',
    marginTop: 20
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function NewsContent() {
  const classes = useStyles();
  const blog = store.getState().blog.blog;
  const pr = store.getState().pressReleases.pressReleases;
  const news = store.getState().newsArticles.newsArticles;

  const allPosts = blog.concat(pr, news);

  console.log(allPosts)
  const allSorted = allPosts.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  })

  return (
    <Container style={{ marginTop: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end' }}>
        <Typography variant='h2' style={{ marginTop: '50px', color: '#74b4ab', display: 'inline-block' }}>News</Typography>
      </div>
      <hr></hr>
      <Grid container className={classes.cardWrapper} spacing={4}>
        {allSorted.map(post => (
          <Grid item xs={12}>
            <BlogCard title={post.title} image={post.image} date={post.date} id={post._id}>
              {post.description}
            </BlogCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
