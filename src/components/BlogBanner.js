import React from 'react'
import {useSelector} from 'react-redux';

export default function BlogBanner() {
  const products = useSelector(state => state.products.products)

  return (
    <div style={{height: '150px', width: '50vw', padding: '20px'}}>
      <p style={{textAlign: 'center'}}>I will contain interesting and compelling blog content</p>
    </div>
  )
}