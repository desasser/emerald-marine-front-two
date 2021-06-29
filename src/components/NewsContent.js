import React, { useState, useEffect } from 'react'
import {useSelector} from 'react-redux';
import BlogCard from '../components/BlogCard';
import { Container, Grid, Typography, Checkbox, Radio, RadioGroup, FormControlLabel, FormControl } from '@material-ui/core';
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

  // grab posts from store
  const blog = useSelector(state => state.blog.blog)
  const pr = useSelector(state => state.pressReleases.pressReleases)
  const news = useSelector(state => state.newsArticles.newsArticles)

  // add all posts to an array
  const allPosts = blog.concat(pr, news);

  // sort that array by most recent
  const allSorted = allPosts.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  })

  const [value, setValue] = useState('All')
  const [postState, setFilter] = useState({
    original: allSorted,
    filtered: allSorted
  })

  useEffect(() => {
    setFilter({
      original: allSorted,
      filtered: allSorted
    })
  }, [blog, pr, news])

  const handleChange = (event) => {
    setValue(event.target.value)
    console.log(event.target.value)
    if (event.target.value !== 'All') {
      setFilter({
        ...postState,
        filtered: allSorted.filter(obj => obj.categories?.includes(event.target.value))
      })
    } else {
      setFilter({
        ...postState,
        filtered: allSorted
      })
    }
  };

  return (
    <Container style={{ marginTop: '20px' }}>
        <Typography variant='h2' style={{ marginTop: '3rem', color: '#74b4ab'}}>News</Typography>
      <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
        <FormControl component="fieldset" style={{alignItems: 'flex-end'}}>
          <RadioGroup aria-label="posts" name="posts" value={value} onChange={handleChange} style={{flexDirection: 'row'}}>
            <FormControlLabel value="All" control={<Radio style={{color:'goldenrod'}}/>} label="All Posts" />
            <FormControlLabel value="Man-Overboard" control={<Radio style={{color:'goldenrod'}} />} label="Man-Overboard" />
            <FormControlLabel value="Water Rescue Training" control={<Radio style={{color:'goldenrod'}} />} label="Water Rescue Training" />
            <FormControlLabel value="Marine Safety" control={<Radio style={{color:'goldenrod'}} />} label="Marine Safety" />
          </RadioGroup>
        </FormControl>
      </div>
      <hr></hr>
      <Grid container className={classes.cardWrapper} spacing={4}>
        {postState.filtered?.map(post => (
          <Grid item xs={12} key={post._id}>
            <BlogCard title={post.title} image={post.image} date={post.date} id={post._id} alt={post.alt} intro={post.intro} publication={post.publication} link={post.link}>
              {post.description}
            </BlogCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
