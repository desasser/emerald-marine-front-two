import React from 'react'
import { Typography } from '@material-ui/core';
import store from '../utils/store';

export default function SingleBlogContent({ id }) {
  const blog = store.getState().blog.blog;
  const pr = store.getState().pressReleases.pressReleases;
  const news = store.getState().newsArticles.newsArticles;

  const allPosts = blog.concat(pr, news);

  const currentPost = allPosts.find(p => p._id === id);

  return (
    <>
      <div style={{ width: '100%', marginTop: '3em', }}>
        <Typography variant="h3" style={{ color: '#74b4ab' }}>
          {currentPost.title}
        </Typography>
        <hr style={{marginTop:'2em'}}></hr>
        <Typography variant='body1'>Published: {currentPost.date}</Typography>
        <Typography variant='body1'>Categories: {currentPost.categories.join(', ')}</Typography>
        <Typography variant='body1'>Tags: {currentPost.tags.join(', ')}</Typography>
        <hr style={{marginBottom:'2em'}}></hr>
        {/* TODO: Write a map function to map over state and write the subtitles and sections */}
        <img src={currentPost.image ? `${currentPost.image}` : `https://place-puppy.com/300x300`} style={{ display: 'inline-block' }} />
        <Typography variant='h5' style={{ color: '#74b4ab', marginTop: '1.5em' }}>
          Subtitle 1
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '1.5em' }}>
          Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.
        </Typography>
        <Typography variant='h5' style={{ color: '#74b4ab' }}>
          Subtitle 2
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '1em' }}>
          Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.
        </Typography>
        <Typography variant='h5' style={{ color: '#74b4ab' }}>
          Subtitle 3
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '1em' }}>
          Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.
        </Typography>
        <hr style={{marginTop:'2em'}}></hr>
        <Typography variant='body1'>Published: {currentPost.date}</Typography>
        <Typography variant='body1'>Categories: {currentPost.categories.join(', ')}</Typography>
        <Typography variant='body1'>Tags: {currentPost.tags.join(', ')}</Typography>
        <hr></hr>
      </div>
    </>
  )
}
