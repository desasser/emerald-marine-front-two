import React, {useState} from "react";
import Grid from '@material-ui/core/Grid';
import BlogCard from '../BlogCard';
import API from '../../utils/API';
import store from '../../utils/store';

const Blog = () => {
    const posts = store.getState().blog.blog;

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <h1>Current Blog Posts</h1>
                    <br/>
                </Grid>
                <Grid container spacing={3} justify='space-evenly'>
                    {posts.map(post => 
                        <Grid item xs={6}>
                            <BlogCard id='#' title={post.title} image={post.image} alt={post.alt} children={post.intro}/>
                        </Grid>)}
                </Grid>
            </Grid>
        </div>
    )
    
}

export default Blog;