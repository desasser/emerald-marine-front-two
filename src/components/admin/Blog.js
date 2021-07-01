import React, {useState} from "react";
import {useSelector} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BlogCard from '../BlogCard';
import AddForm from './AddForm';
import ProgressIndicator from './ProgressIndicator';
import store from '../../utils/store';
import API from '../../utils/API';
import {fetchBlog} from '../../utils/actions/blogActions';

const useStyles = makeStyles((theme) => ({        
    infoCards: {
        maxHeight: '75vh',
        overflow: 'scroll'
    }
  }));

const Blog = () => {
    const classes = useStyles();
    const posts = useSelector(state => state.blog.blog);
    const blogContent = useSelector(state => state.blogContent.blogContent)

    const token = localStorage.getItem('token');
    const warnings = 'Date must be in the following format: "YYYY-MM-DD". Enter tags and categories as comma-seperated lists.'
    const [current, setCurrent] = useState({
        title: '',
        date: '',
        categories: '',
        tags: '',
        image: '',
        alt: '',
        intro: ''
    });
    const [currentID, setCurrentID] = useState('');
    const [editing, setEditing] = useState(false);
    const [updating, setUpdating] = useState(false);
    const [indicator, setIndicator] = useState({
        open: false,
        severity: '',
        message: ''
    })


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setIndicator({
            ...indicator, open: false
        });
    };
    
    const fields = [{name: 'title', content: `${current.title}`}, {name: 'date', content: `${current.date}`}, {name: 'categories', content: `${current.categories}`}, {name: 'tags', content: `${current.tags}`}, {name: 'image', content: `${current.image}`}, {name: 'alt', content: `${current.alt}`}, {name: 'intro', content: `${current.intro}`}]

    let postContent = [{heading: '', content: ''}]

    const showEditForm = () => {
        setEditing(true)
    }

    const hideEditForm = () => {
        setEditing(false)
    }

    const clearCurrent = () => {
        setCurrent({
        title: '',
        date: '',
        categories: '',
        tags: '',
        image: '',
        alt: '',
        intro: '',
        })
    }

    const handleAddFormChange = e => {
        const {name, value} = e.target;
        setCurrent({
            ...current,
            [name]: value
        });
    }


    const addBlogPost = () => {
        setUpdating(false);
        const currentPost = {...current, content: JSON.stringify(blogContent)}
        API.createBlogPost(currentPost, token).then(res => {
            if(res.data) {
                store.dispatch(fetchBlog())
            }
            clearCurrent();
            hideEditForm();
            setIndicator({
                open: true,
                severity: 'success',
                message: 'Blog post added successfully.'
            });
        }).catch(err => {
            setIndicator({
                open: true,
                severity: 'error',
                message: `Error adding blog post: ${err.message}`
            });
        });
    }

    const grabCurrent = e => {
        setUpdating(true);
        e.preventDefault();
        const title = e.currentTarget.getAttribute('data-title')
        const date = e.currentTarget.getAttribute('data-date')
        const categories = e.currentTarget.getAttribute('data-categories')
        const tags = e.currentTarget.getAttribute('data-tags')
        const image = e.currentTarget.getAttribute('data-image')
        const alt = e.currentTarget.getAttribute('data-alt')
        const intro = e.currentTarget.getAttribute('data-intro')
        const content = JSON.parse(e.currentTarget.getAttribute('data-content'))
        const id = e.currentTarget.getAttribute('data-id')
        postContent = content;
        setCurrent({
            title: title,
            date: date,
            categories: categories,
            tags: tags,
            image: image,
            alt: alt,
            intro: intro

        });
        setCurrentID(id)   
        showEditForm();    
    }


    const removeCurrent = e => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute('data-id');
        API.deleteBlogPost(id, token).then(res => {
            if(res) {
                console.log(res)
                store.dispatch(fetchBlog())
                setIndicator({
                    open: true,
                    severity: 'success',
                    message: 'Blog post successfully deleted.'
                });
            }
        }).catch(err => {
            setIndicator({
                open: true,
                severity: 'error',
                message: `Error deleting blog post: ${err.message}`
            });
        });
    }

    const updateBlog = e => {
        e.preventDefault();
        API.updateBlogPost(currentID, current, token).then(res => {
            if(res) {
                console.log(res)
                store.dispatch(fetchBlog())
            }
            clearCurrent();
            hideEditForm();
            setUpdating(false);
            setIndicator({
                open: true,
                severity: 'success',
                message: 'Blog post successfully updated.'
            });
        }).catch(err => {
            if(err) {
                setIndicator({
                    open: true,
                    severity: 'error',
                    message: `Error updating blog post: ${err.message}`
                });
            }
        });
    }
    

    const uploadSuccess = result => {
        console.log(result.info.url)
        store.dispatch({
            type: 'FETCH_IMAGE_URL',
            payload: {
                url: result.info.url
            }
        });
        setCurrent({
            ...current,
            image: result.info.url
        });
    }

    const uploadFailure = response => {
        setIndicator({
            open: true,
            severity: 'error',
            message: `Error uploading image: ${response}`
        });
    }

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <ProgressIndicator open={indicator.open} message={indicator.message} severity={indicator.severity} handleClose={handleClose}></ProgressIndicator>
                    <h1>Current Blog Posts</h1>
                    <br/>
                </Grid>
                {editing ? 
                <Grid container spacing={1} justify='space-evenly'>
                <Grid item xs={6} className={classes.infoCards}>
                {posts?.map(post =>  
                    <BlogCard id='#' view='admin' type='Blog Post' title={post.title} image={post.image} alt={post.alt} intro={post.intro} date={post.date} id={post._id} tags={post.tags} categories={post.categories} content={post.content} grabMe={grabCurrent} confirm={removeCurrent}/>
                    )}
                </Grid>
                <Grid item xs={4}>
                    <AddForm section='Blog Post' message={warnings} fields={fields} handleAddFormChange={handleAddFormChange} updateMe={updating ? updateBlog : addBlogPost} successCallback={uploadSuccess} failureCallback={uploadFailure} show={editing} showForm={showEditForm} postContent={postContent}/>
                </Grid>
            </Grid> :
            <Grid container spacing={1}>
                <Grid item xs={9} className={classes.infoCards}>
                {posts?.map(post =>  
                    <BlogCard id='#' view='admin' type='Blog Post' title={post.title} image={post.image} alt={post.alt} intro={post.intro} date={post.date} id={post._id} tags={post.tags} categories={post.categories} content={post.content} grabMe={grabCurrent} confirm={removeCurrent}/>
                    )}
                </Grid>
                <Grid item xs={2}>
                    <AddForm section='Blog Post' message={warnings} fields={fields} handleAddFormChange={handleAddFormChange} addMe={addBlogPost} updateMe={updateBlog} successCallback={uploadSuccess} failureCallback={uploadFailure} show={editing} showForm={showEditForm} postContent={postContent}/>
                </Grid>
            </Grid>}
            </Grid>
        </div>
    )
    
}

export default Blog;