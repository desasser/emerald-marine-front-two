import * as React from "react"
import { Typography, Breadcrumbs } from '@material-ui/core'
import { Link } from 'react-router-dom'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ProductContent from "../components/ProductContent"
import Page from "../components/Page"

const Products = () => (
  <Page>
    <div style={{ marginTop: '30px', width: '100%' }}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        <Link color="inherit" to="/" style={{ textDecoration: 'none', color: 'grey' }}>
          Home
        </Link>
        <Typography color="textPrimary">Products</Typography>
      </Breadcrumbs>
    </div>
    <div style={{ maxWidth: '80%' }}>
      <ProductContent></ProductContent>
    </div>
  </Page>
)

export default Products