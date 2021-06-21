import * as React from "react"
import { useParams, Link } from 'react-router-dom'
import { Breadcrumbs, Typography } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import SingleBlogContent from "../components/SingleBlogContent"
import Page from "../components/Page"

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function SingleBlog() {
  const { id } = useParams();

  return (
    <>
      <Page>
        <div style={{ marginTop: '30px', width: '100%' }}>
          <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
            <Link color="inherit" to="/" style={{ textDecoration: 'none', color: 'black' }}>
              Home
            </Link>
            <Link color="inherit" to="/news" style={{ textDecoration: 'none', color: 'black' }}>
              News
            </Link>
            <Typography color="textPrimary">Blog Title</Typography>
          </Breadcrumbs>
        </div>
        <SingleBlogContent id={id}></SingleBlogContent>
      </Page>
    </>
  )
}