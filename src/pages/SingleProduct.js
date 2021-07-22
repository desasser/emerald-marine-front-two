import * as React from "react"
import { useParams, Link } from 'react-router-dom'
import { Breadcrumbs, Typography } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import SingleProductContent from "../components/SingleProductContent"
import Page from "../components/Page"
import { useSelector } from 'react-redux';
import {Helmet} from 'react-helmet'

export default function SingleProduct() {
  const { sku } = useParams();
  const products = useSelector(state => state.products.products)
  const currentProduct = products?.find(p => p.SKU === sku);

  return (
    <Page>
      <Helmet>
        <title>{currentProduct.name}</title>
        <meta
        name="description"
        content={`${currentProduct.description.split('.')[0]}`}/>
      </Helmet>
      <div style={{ marginTop: '30px', width: '80%' }}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          <Link color="inherit" to="/" style={{ textDecoration: 'none', color: 'grey' }}>
            Home
          </Link>
          <Link color="inherit" to="/products" style={{ textDecoration: 'none', color: 'grey' }}>
            Products
          </Link>
          <Typography color="textPrimary">{currentProduct.name}</Typography>
        </Breadcrumbs>
      </div>
      <SingleProductContent sku={sku}></SingleProductContent>
    </Page>
  )
}