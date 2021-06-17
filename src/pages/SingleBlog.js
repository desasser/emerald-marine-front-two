import * as React from "react"
import { useParams } from 'react-router-dom'
import { Breadcrumbs, Typography, Link } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import SingleBlogContent from "../components/SingleBlogContent"

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function SingleBlog() {
  const { id } = useParams();

  console.log(id)

  return (
  <>
    <div style={{ marginTop: '30px', width: '100%' }}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        <Link color="inherit" href="/" onClick={handleClick}>
          Home
        </Link>
        <Link color="inherit" href="/news" onClick={handleClick}>
          News
        </Link>
        <Typography color="textPrimary">Blog Title</Typography>
      </Breadcrumbs>
    </div>
    <SingleBlogContent id={id}></SingleBlogContent>
  </>
)}