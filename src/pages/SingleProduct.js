import * as React from "react"
import { Breadcrumbs, Typography, Link } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import SingleProductContent from "../components/SingleProductContent"

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const SingleProduct = () => (
  <>
    <div style={{ marginTop: '30px' }}>
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
      <Typography variant='h2' style={{ marginTop: '50px' }}>Product Name</Typography>
      <SingleProductContent></SingleProductContent>
  </>
)

export default SingleProduct