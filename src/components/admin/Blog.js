import React, {useState} from "react";
import { useDispatch } from 'react-redux';
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
    const dispatch=useDispatch()
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
    const [currentID, setCurrentID] = useState('')

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
                dispatch(updateBlogPosts());
            }
        }).catch(err => {
            console.log(err.message)
        });
    }

    const grabCurrent = e => {
        e.preventDefault();
        const title = e.currentTarget.getAttribute('data-title')
        const date = e.currentTarget.getAttribute('data-date')
        const categories = e.currentTarget.getAttribute('data-categories')
        const tags = e.currentTarget.getAttribute('data-tags')
        const image = e.currentTarget.getAttribute('data-image')
        const alt = e.currentTarget.getAttribute('data-alt')
        const intro = e.currentTarget.getAttribute('data-intro')
        const content = e.currentTarget.getAttribute('data-content')
        const id = e.currentTarget.getAttribute('data-id')
        setCurrent({
            title: title,
            date: date,
            categories: categories,
            tags: tags,
            image: image,
            alt: alt,
            intro: intro,
            content: content
        });
        setCurrentID(id)       
    }

    const removeCurrent = e => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute('data-id');
        API.deleteBlogPost(id, token).then(res => {
            if(res) {
                console.log(res)
                dispatch(updateBlogPosts())
            }
        }).catch(err => {
            console.log(err.message)
        });
    }

    const updateBlog = e => {
        e.preventDefault();
        API.updateBlogPost(currentID, current, token).then(res => {
            if(res) {
                console.log(res)
                dispatch(updateBlogPosts())
            }
        }).catch(err => {
            if(err) {
                console.log(err.message)
            }
        })
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
                            <BlogCard id='#' view='admin' type='Blog Post' title={post.title} image={post.image} alt={post.alt} intro={post.intro} date={post.date} id={post._id} tags={post.tags} categories={post.categories} content={post.content} grabMe={grabCurrent} removeMe={removeCurrent}/>
                        </Grid>)}
                </Grid>
                <Grid item xs={12}>
                    <AddForm section='Blog' message={warnings} fields={fields} handleAddFormChange={handleAddFormChange} addMe={addBlogPost} updateMe={updateBlog}/>
                </Grid>
            </Grid>
        </div>
    )
    
}

export default Blog;