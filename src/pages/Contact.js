import * as React from "react"
import { Typography, Breadcrumbs } from '@material-ui/core'
import { Link } from 'react-router-dom'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Contact from "../components/Contact"
import Page from "../components/Page"
import {Helmet} from 'react-helmet';

const News = () => (
  <Page>
    <Helmet>
      <title>Contact Emerald Marine Products</title>
      <meta
      name="description"
      content="Emerald Marine Products is an industry leader in industrial-grade, USA-made, Man Overboard Alerting, Water Rescue Dummy, and Retrieval Products. Please contact us through the contact form below, by telephone, or email."/>
    </Helmet>
    <div style={{ marginTop: '30px', width: '80%' }}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        <Link color="inherit" to="/" style={{ textDecoration: 'none', color: 'grey' }}>
          Home
        </Link>
        <Typography color="textPrimary">Contact</Typography>
      </Breadcrumbs>
    </div>
    <div style={{ maxWidth: '80%' }}>
      <Contact></Contact>
    </div>
  </Page>
)

export default News