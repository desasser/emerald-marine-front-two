import * as React from "react"
import { Typography, Breadcrumbs } from '@material-ui/core'
import { Link } from 'react-router-dom'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ProductContent from "../components/ProductContent"
import Page from "../components/Page"
import {Helmet} from 'react-helmet'

const Products = () => (
  <Page>
    <Helmet>
      <title>ALERT Man-Overboard Products</title>
      <meta
      name="description"
      content="Emerald Marine offers an industry-trusted selection of ALERT Man-Overboard Alarm Systems, OSCAR Water Rescue Training Dummies, and other marine products and accessories to aid in fall overboard retrieval."/>
    </Helmet>
    <div style={{ marginTop: '2rem', width: '80%' }}>
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