import * as React from "react"
import { useParams, Link } from 'react-router-dom'
import { Breadcrumbs, Typography } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import SingleBlogContent from "../components/SingleBlogContent"
import Page from "../components/Page"
import store from '../utils/store';

export default function SingleBlog() {
  const { id } = useParams();
  const blog = store.getState().blog.blog;
  const pr = store.getState().pressReleases.pressReleases;
  const news = store.getState().newsArticles.newsArticles;

  const allPosts = blog.concat(pr, news);

  const currentPost = allPosts.find(p => p._id === id);

  return (
    <Page>
      <div style={{ marginTop: '30px', width: '80%' }}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          <Link color="inherit" to="/" style={{ textDecoration: 'none', color: 'grey' }}>
            Home
          </Link>
          <Link color="inherit" to="/news" style={{ textDecoration: 'none', color: 'grey' }}>
            News
          </Link>
          <Typography color="textPrimary">{currentPost.title}</Typography>
        </Breadcrumbs>
      </div>
      <div style={{ maxWidth: '80%' }}>
        <SingleBlogContent id={id}></SingleBlogContent>
      </div>
    </Page>
  )
}