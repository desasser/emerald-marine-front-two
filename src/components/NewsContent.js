import React from 'react';
import {useSelector} from 'react-redux';
import BlogCard from '../components/BlogCard';
import { Container, Grid, Typography } from '@material-ui/core';
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
  const blog = useSelector(state => state.blog.blog)
  const pr = useSelector(state => state.pressReleases.pressReleases)
  const news = useSelector(state => state.newsArticles.newsArticles)

  const allPosts = blog.concat(pr, news);

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
            <BlogCard title={post.title} image={post.image} date={post.date} id={post._id} alt={post.alt}>
              {post.description}
            </BlogCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
