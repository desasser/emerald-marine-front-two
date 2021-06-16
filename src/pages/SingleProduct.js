import * as React from "react"
import { useParams } from 'react-router-dom'
import { Breadcrumbs, Typography, Link } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import SingleProductContent from "../components/SingleProductContent"

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}


export default function SingleProduct() {
  const { sku } = useParams();

  console.log('product sku', sku);

  return (
    <>
      <div style={{ marginTop: '30px', width: '100%' }}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          <Link color="inherit" href="/" onClick={handleClick}>
            Home
          </Link>
          <Link color="inherit" href="/products" onClick={handleClick}>
            Products
          </Link>
          <Typography color="textPrimary">Product name</Typography>
        </Breadcrumbs>
      </div>
      <SingleProductContent sku={sku}></SingleProductContent>
    </>
  )
}