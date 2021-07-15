import * as React from "react"
import { Typography, Breadcrumbs } from '@material-ui/core'
import { Link } from 'react-router-dom'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NewsContent from "../components/NewsContent"
import Page from "../components/Page"

const News = () => (
  <Page>
    <div style={{ marginTop: '30px', width: '80%' }}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        <Link color="inherit" to="/" style={{ textDecoration: 'none', color: 'grey' }}>
          Home
        </Link>
        <Typography color="textPrimary">News</Typography>
      </Breadcrumbs>
    </div>
    <div style={{ maxWidth: '80%' }}>
      <NewsContent></NewsContent>
    </div>
  </Page>
)

export default News
