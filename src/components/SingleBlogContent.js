import React from 'react'
import { Typography } from '@material-ui/core';
import store from '../utils/store';

export default function SingleBlogContent({ id }) {
  const blog = store.getState().blog.blog;
  const pr = store.getState().pressReleases.pressReleases;
  const news = store.getState().newsArticles.newsArticles;

  const allPosts = blog.concat(pr, news);

  const currentPost = allPosts.find(p => p._id === id);

  console.log(JSON.parse(currentPost.content))

  return (
    <>
      <div style={{ width: '100%', marginTop: '3em', }}>
        <Typography variant="h3" style={{ color: '#74b4ab' }}>
          {currentPost.title}
        </Typography>
        <hr style={{ marginTop: '2em' }}></hr>
        <Typography variant='body1'>Published: {currentPost.date}</Typography>
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
        <img src={currentPost.image ? `${currentPost.image}` : `https://place-puppy.com/300x300`} style={{ display: 'inline-block', width: '100%' }} alt={currentPost.title} />
        {JSON.parse(currentPost.content).map(text =>
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
        <Typography variant='body1'>Published: {currentPost.date}</Typography>
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
