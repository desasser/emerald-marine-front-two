import React, {useState} from "react";
import { useDispatch } from 'react-redux';
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
    const dispatch=useDispatch()
    const [current, setCurrent] = useState({
        title: '',
        publication: '',
        date: '',
        link: '',
        description: ''
    });
    const [currentID, setCurrentID] = useState('')

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
                dispatch(updateNewsArticles());
            }
        }).catch(err => {
            console.log(err.message)
        });
    }

    const grabCurrent = e => {
        e.preventDefault();
        const title = e.currentTarget.getAttribute('data-title')
        const publication = e.currentTarget.getAttribute('data-publication')
        const date = e.currentTarget.getAttribute('data-date')
        const link = e.currentTarget.getAttribute('data-link')
        const description = e.currentTarget.getAttribute('data-description')
        const id = e.currentTarget.getAttribute('data-id')

        description ? setCurrent({
           title: title,
           publication: publication,
           date: date,
           link: link,
           description: description
        }) : setCurrent({
            title: title,
            publication: publication,
            date: date,
            link: link,
        })
        setCurrentID(id)
    }

    const removeCurrent = e => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute('data-id')
        API.deleteNewsArticle(id, token).then(res => {
            if(res) {
                console.log(res);
                dispatch(updateNewsArticles());
            }
        }).catch(err => {
            console.log(err.message)
        });
    }

    const updateMe = e => {
        e.preventDefault();
        API.updateNewsArticle(currentID, current, token).then(res => {
            if(res) {
                console.log(res);
                dispatch(updateNewsArticles());
            }
        }).catch(err => {
            if(err) {
                console.log(err.message)
            }
        });
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
                            <BlogCard id='#' title={article.title} image={'http://placekitten.com/g/200/300'} alt={'not a cat'} publication={article.publication} date = {article.date} link={article.link} description = {article.description} id={article._id} removeMe={removeCurrent} grabMe={grabCurrent} view='admin' type='News Article'/>
                        </Grid>)}
                </Grid>
                <Grid item xs={12}>
                    <AddForm section='News' message={warnings} fields={fields} handleAddFormChange={handleAddFormChange} addMe={addNewsArticle} updateMe={updateMe}/>
                </Grid>
            </Grid>
        </div>
    )
    
}

export default News;