import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Typography } from '@material-ui/core';

export default function BlogBanner({ testimonials }) {


  function Item(props) {
    return (
      <div style={{width: '90%', overflow: 'hidden'}}>
        <Typography><em>{props.item.content}</em></Typography>
        <Typography variant="body2" style={{textAlign: 'right', color: 'grey'}}>-{props.item.author}</Typography>
      </div>
    )
  }

  return (
    <div style={{ height: '150px', width: '50vw', padding: '20px' }}>
      <Typography variant='h5' style={{ marginBottom: '1rem', fontStyle: 'italic', color: '#74b4ab'}}>
        Testimonials
      </Typography>
      <Carousel
        indicators={false}
        // timeout='500'
        interval='10000'
        // animation='slide'
        navButtonsAlwaysInvisible={true}
      >
        {
          testimonials.map((item, i) => <Item key={i} item={item} />)
        }
      </Carousel>
    </div >
  )
}

