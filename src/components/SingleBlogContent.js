import React from 'react'
import { Typography } from '@material-ui/core';
import store from '../utils/store';

export default function SingleBlogContent({ id }) {
  const blog = store.getState().blog.blog;
  const pr = store.getState().pressReleases.pressReleases;
  const news = store.getState().newsArticles.newsArticles;

  const allPosts = blog.concat(pr, news);

  const currentPost = allPosts.find(p => p._id === id);

  let isString = false;
  if (!currentPost.content.includes("[{")) {
    isString = false;
  } else {
    isString = true;
  }

  return (
    <>
      <div style={{ width: '100%', marginTop: '3em', }}>
        <Typography variant="h3" style={{ color: '#74b4ab' }}>
          {currentPost.title}
        </Typography>
        <hr style={{ marginTop: '2em' }}></hr>
        <Typography variant='body1'>Published: {currentPost.date.split('T')[0]}</Typography>
        {currentPost.categories ?
          <Typography variant='body1'>Categories: {currentPost.categories.join(', ')}</Typography>
          :
          <Typography variant='body1'>Categories: n/a</Typography>
        }
        {currentPost.tags ?
          <Typography variant='body1'>Tags: {currentPost.tags.join(', ')}</Typography>
          :
          <Typography variant='body1'>Tags: n/a</Typography>
        }
        <hr style={{ marginBottom: '2em' }}></hr>
        <img src={currentPost.image} style={{ display: 'inline-block', maxWidth: '400px', margin: '2rem' }} alt={currentPost.title} />
        {!isString ?
          <Typography variant="body1" style={{ marginBottom: '1.5em' }}>
            {currentPost.content}
          </Typography>
          :
          JSON.parse(currentPost.content).map(text =>
            <>
              <Typography variant='h4' style={{ color: '#74b4ab', marginTop: '1.5em' }}>
                {text.heading}
              </Typography>
              <br></br>
              <Typography variant="body1" style={{ marginBottom: '1.5em' }}>
                {text.content}
              </Typography>
            </>
          )}
        <hr style={{ marginTop: '2em' }}></hr>
        <Typography variant='body1'>Published: {currentPost.date.split('T')[0]}</Typography>
        {currentPost.categories ?
          <Typography variant='body1'>Categories: {currentPost.categories.join(', ')}</Typography>
          :
          <Typography variant='body1'>Categories: n/a</Typography>
        }
        {currentPost.tags ?
          <Typography variant='body1'>Tags: {currentPost.tags.join(', ')}</Typography>
          :
          <Typography variant='body1'>Tags: n/a</Typography>
        }
        <hr></hr>
      </div>
    </>
  )
}
