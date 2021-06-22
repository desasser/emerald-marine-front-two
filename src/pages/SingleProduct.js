import * as React from "react"
import { useParams, Link } from 'react-router-dom'
import { Breadcrumbs, Typography } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import SingleProductContent from "../components/SingleProductContent"
import Page from "../components/Page"

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}


export default function SingleProduct() {
  const { sku } = useParams();

  return (
    <>
      <Page>
        <div style={{ marginTop: '30px', width: '100%' }}>
          <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
            <Link color="inherit" to="/" style={{ textDecoration: 'none', color: 'grey' }}>
              Home
            </Link>
            <Link color="inherit" to="/products" style={{ textDecoration: 'none', color: 'grey' }}>
              Products
            </Link>
            <Typography color="textPrimary">Product name</Typography>
          </Breadcrumbs>
        </div>
        <SingleProductContent sku={sku}></SingleProductContent>
      </Page>
    </>
  )
}