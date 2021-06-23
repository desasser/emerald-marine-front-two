import React, {useState} from "react";
import {useSelector} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BlogCard from '../BlogCard';
import AddForm from './AddForm';
import store from '../../utils/store';
import API from '../../utils/API';
import {fetchBlog} from '../../utils/actions/blogActions';

const useStyles = makeStyles((theme) => ({        
    infoCards: {
        maxHeight: '50vh',
        overflow: 'scroll'
    }
  }));

const Blog = () => {
    const classes = useStyles();
    const posts = useSelector(state => state.blog.blog);
    const token = localStorage.getItem('token');
    const warnings = 'Date must be in the following format: "YYYY-MM-DD". Enter tags and categories as comma-seperated lists.'
    const [current, setCurrent] = useState({
        title: '',
        date: '',
        categories: '',
        tags: '',
        image: '',
        alt: '',
        intro: '',
        content: ''
    });
    const [currentID, setCurrentID] = useState('');
    const [editing, setEditing] = useState(false);

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
        content: ''
        })
    }

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
                store.dispatch(fetchBlog())
            }
            clearCurrent();
            hideEditForm();
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
        showEditForm();    
    }

    const removeCurrent = e => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute('data-id');
        API.deleteBlogPost(id, token).then(res => {
            if(res) {
                console.log(res)
                store.dispatch(fetchBlog())
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
                store.dispatch(fetchBlog())
            }
            clearCurrent();
            hideEditForm();
        }).catch(err => {
            if(err) {
                console.log(err.message)
            }
        })
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
        console.log(response)
    }

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <h1>Current Blog Posts</h1>
                    <br/>
                </Grid>
                {editing ? 
                <Grid container spacing={1} justify='space-evenly'>
                <Grid item xs={6} className={classes.infoCards}>
                {posts?.map(post =>  
                        <BlogCard id='#' view='admin' type='Blog Post' title={post.title} image={post.image} alt={post.alt} intro={post.intro} date={post.date} id={post._id} tags={post.tags} categories={post.categories} content={post.content} grabMe={grabCurrent} removeMe={removeCurrent}/>
                        )}
                </Grid>
                <Grid item xs={4}>
                    <AddForm section='Blog Post' message={warnings} fields={fields} handleAddFormChange={handleAddFormChange} addMe={addBlogPost} updateMe={updateBlog} successCallback={uploadSuccess} failureCallback={uploadFailure}/>
                </Grid>
            </Grid> :
            <Grid container spacing={1}>
                <Grid item xs={12} className={classes.infoCards}>
                {posts?.map(post =>  
                        <BlogCard id='#' view='admin' type='Blog Post' title={post.title} image={post.image} alt={post.alt} intro={post.intro} date={post.date} id={post._id} tags={post.tags} categories={post.categories} content={post.content} grabMe={grabCurrent} removeMe={removeCurrent}/>
                        )}
                </Grid>
            </Grid>}
                
            </Grid>
        </div>
    )
    
}

export default Blog;