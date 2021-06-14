import React from "react";
import Grid from '@material-ui/core/Grid';
import BlogCard from '../BlogCard';
import store from '../../utils/store';

const News = () => {
    const articles = store.getState().newsArticles.newsArticles

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
                        </Grid>)}
                </Grid>
            </Grid>
        </div>
    )
    
}

export default News;