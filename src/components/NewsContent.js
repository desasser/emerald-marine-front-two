import React from 'react'
import BlogCard from '../components/BlogCard'
import { Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import store from '../utils/store';

const useStyles = makeStyles((theme) => ({
  flexBox: {
    flexGrow: 1,
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
  const allSorted = allPosts.sort(function(a,b){
    return new Date(b.date) - new Date(a.date);
  })

  console.log(allSorted)

  return (
    <Container style={{marginTop: '20px'}}>
      <hr></hr>
      <Grid container className={classes.flexBox} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify='center' spacing={4}>
            <Grid item>
              <BlogCard title='Blog 1' num={1}>This is a custom description for blog 1, Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters. </BlogCard>
            </Grid>
            <Grid item>
              <BlogCard title='Blog 2' num={2}>This is a custom description for blog 2, Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.</BlogCard>
            </Grid>
            <Grid item>
              <BlogCard title='Blog 3' num={3}>This is a custom description for blog 3, Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.</BlogCard>
            </Grid>
            <Grid item>
              <BlogCard title='Blog 4' num={4}>This is a custom description for blog 4, Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.</BlogCard>
            </Grid>
            <Grid item>
              <BlogCard title='Blog 5' num={5}>This is a custom description for blog 5, Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.</BlogCard>
            </Grid>
            <Grid item>
              <BlogCard title='Blog 6' num={6}>This is a custom description for blog 6, Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.</BlogCard>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </Container>
  )
}
