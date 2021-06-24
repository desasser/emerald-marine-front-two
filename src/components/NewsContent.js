import React, { useState } from 'react'
import {useSelector} from 'react-redux';
import BlogCard from '../components/BlogCard';
import { Container, Grid, Typography, Checkbox } from '@material-ui/core';
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

export default function NewsContent() {
  const classes = useStyles();
  const [state, setState] = useState({
    'Man-Overboard': true,
    'Water Rescue Training': true,
    'Marine Safety': true
  });

  const blog = useSelector(state => state.blog.blog)
  const pr = useSelector(state => state.pressReleases.pressReleases)
  const news = useSelector(state => state.newsArticles.newsArticles)

  const allPosts = blog.concat(pr, news);

  const allSorted = allPosts.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  })

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    // TODO: Filter by checked item
    // search products for all objects with a key matching the category, 
    // put those in an array and render those
    console.log('name', event.target.name)
    // console.log('products', products[0].categories)
    // console.log('filtered results', products.filter(obj => obj.categories.includes(event.target.name)))
  };

  return (
    <Container style={{ marginTop: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <Typography variant='h2' style={{ marginTop: '50px', color: '#74b4ab', display: 'inline-block' }}>News</Typography>
        <div>
          <Checkbox
            // checked={state.manOverboard}
            onChange={handleChange}
            color="default"
            name="Man-Overboard"
            inputProps={{ 'aria-label': `Man-Overboard checkbox` }}
          />
          <Typography component="span">Man-Overboard</Typography>
          <Checkbox
            checked={state.marineSafety}
            onChange={handleChange}
            color="default"
            name="Water Rescue Training"
            inputProps={{ 'aria-label': `Marine Safety checkbox` }}
          />
          <Typography component="span">Water Rescue Training</Typography>
          <Checkbox
            checked={state.waterRescue}
            onChange={handleChange}
            color="default"
            name="Marine Safety"
            inputProps={{ 'aria-label': `Marine Safety checkbox` }}
          />
          <Typography component="span">Marine Safety</Typography>
        </div>
      </div>
      <hr></hr>
      <Grid container className={classes.cardWrapper} spacing={4}>
        {allSorted?.map(post => (
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
