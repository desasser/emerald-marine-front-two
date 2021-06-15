import React, {useState} from "react";
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import BlogCard from '../BlogCard';
import AddForm from './AddForm';
import store from '../../utils/store';
import API from '../../utils/API';
import { updateNewsArticles } from "../../utils/helpers/updateStore";

const News = () => {
    const articles = store.getState().newsArticles.newsArticles;
    const token = localStorage.getItem('token');
    const [current, setCurrent] = useState({
        title: '',
        publication: '',
        date: '',
        link: '',
        description: ''
    });

    const warnings = 'Date must be in the following format: "YYYY-MM-DD".'
    const fields = [{name: 'title', content: `${current.title}`}, {name: 'publication', content: `${current.publication}`}, {name: 'date', content: `${current.date}`}, {name: 'link', content: `${current.link}`}, {name: 'description', content: `${current.description}`}]

    const handleAddFormChange = e => {
        const {name, value} = e.target;
        setCurrent({
            ...current,
            [name]: value
        });
    }

    const addNewsArticle = () => {
        API.createNewsArticle(current, token).then(res => {
            if(res.data) {
                updateNewsArticles();
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
                    <h1>Current News Articles</h1>
                    <br/>
                </Grid>
                <Grid container spacing={3} justify='space-evenly'>
                    {articles.map(article => 
                        <Grid item xs={6}>
                            <BlogCard id='#' title={article.title} image={'http://placekitten.com/g/200/300'} alt={'not a cat'} children={article.publication}/>
                            <Button size="small" onClick={removeMe}>Delete News Article</Button>
                            <Button size="small" onClick={updateMe}>Edit News Article</Button>
                        </Grid>)}
                </Grid>
                <Grid item xs={12}>
                    <AddForm section='News' message={warnings} fields={fields} handleAddFormChange={handleAddFormChange} addMe={addNewsArticle}/>
                </Grid>
            </Grid>
        </div>
    )
    
}

export default News;