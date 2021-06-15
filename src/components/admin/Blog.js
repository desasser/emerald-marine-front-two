import React, {useState} from "react";
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import BlogCard from '../BlogCard';
import AddForm from './AddForm';
import store from '../../utils/store';
import API from '../../utils/API';
import {updateBlogPosts} from '../../utils/helpers/updateStore';

const Blog = () => {
    const posts = store.getState().blog.blog;
    const token = localStorage.getItem('token');
    const warnings = 'Date must be in the following format: "YYYY-MM-DD". Enter tags and categories as comma-seperated lists.'
    const [current, setCurrent] = useState({
        title: '',
        date: '',
        categories: '',
        tags: '',
        image: 'http://placekitten.com/g/200/300',
        alt: '',
        intro: '',
        content: ''
    });
    const fields = [{name: 'title', content: `${current.title}`}, {name: 'date', content: `${current.date}`}, {name: 'categories', content: `${current.categories}`}, {name: 'tags', content: `${current.tags}`}, {name: 'image', content: `${current.image}`}, {name: 'alt', content: `${current.alt}`}, {name: 'intro', content: `${current.intro}`}, {name: 'content', content: `${current.content}`}]

    const handleAddFormChange = e => {
        const {name, value} = e.target;
        setCurrent({
            ...current,
            [name]: value
        });
    }

    const addBlogPost = () => {
        API.createBlogPost(current, token).then(res => {
            if(res.data) {
                updateBlogPosts();
            }
        }).catch(err => {
            console.log(err.message)
        });
    }

    const removeMe = () => {
        console.log('removed')
    }

    const updateMe = () => {
        console.log('updated')
    }

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
                            <Button size="small" onClick={removeMe}>Delete Blog Post</Button>
                            <Button size="small" onClick={updateMe}>Edit Blog Post</Button>
                        </Grid>)}
                </Grid>
                <Grid item xs={12}>
                    <AddForm section='Blog' message={warnings} fields={fields} handleAddFormChange={handleAddFormChange} addMe={addBlogPost}/>
                </Grid>
            </Grid>
        </div>
    )
    
}

export default Blog;