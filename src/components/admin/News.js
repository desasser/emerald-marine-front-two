import React, {useState} from "react";
import {useSelector} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import BlogCard from '../BlogCard';
import AddForm from './AddForm';
import store from '../../utils/store';
import API from '../../utils/API';
import {fetchNewsArticles} from '../../utils/actions/newsArticleActions';

const News = () => {
    const articles = useSelector(state => state.newsArticles.newsArticles)
    const token = localStorage.getItem('token');
    const [current, setCurrent] = useState({
        title: '',
        publication: '',
        date: '',
        link: '',
        description: ''
    });
    const [currentID, setCurrentID] = useState('')

    const clearCurrent = () => {
        setCurrent({
        title: '',
        publication: '',
        date: '',
        link: '',
        description: ''
        });
    }

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
                store.dispatch(fetchNewsArticles())
            }
            clearCurrent();
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
                store.dispatch(fetchNewsArticles())
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
                store.dispatch(fetchNewsArticles())
            }
            clearCurrent();
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
                <Grid container spacing={1} justify='space-evenly'>
                    <Grid item xs={6}>
                    {articles?.map(article => 
                            <BlogCard id='#' title={article.title} image={'http://placekitten.com/g/200/300'} alt={'not a cat'} publication={article.publication} date = {article.date} link={article.link} description = {article.description} id={article._id} removeMe={removeCurrent} grabMe={grabCurrent} view='admin' type='News Article'/>
                        )}
                    </Grid>
                    <Grid item xs={4}>
                    <AddForm section='News' message={warnings} fields={fields} handleAddFormChange={handleAddFormChange} addMe={addNewsArticle} updateMe={updateMe}/>
                </Grid>
                </Grid>
            </Grid>
        </div>
    )
    
}

export default News;