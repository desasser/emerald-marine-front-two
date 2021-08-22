import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BlogCard from '../BlogCard';
import AddForm from './AddForm';
import ProgressIndicator from './ProgressIndicator';
import store from '../../utils/store';
import API from '../../utils/API';
import { fetchNewsArticles } from '../../utils/actions/newsArticleActions';

const useStyles = makeStyles((theme) => ({
  infoCards: {
    maxHeight: '75vh',
    overflowY: 'scroll'
  }
}));

const News = () => {
  const classes = useStyles();
  const articles = useSelector(state => state.newsArticles.newsArticles)
  const token = localStorage.getItem('token');
  const [current, setCurrent] = useState({
    title: '',
    publication: '',
    date: '',
    link: '',
    description: '',
    tags: '',
    image: '',
    alt: '',
  });
  const [currentID, setCurrentID] = useState('')
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

  const showEditForm = () => {
    setEditing(true)
  }

  const hideEditForm = () => {
    setEditing(false)
  }

  const clearCurrent = () => {
    setCurrent({
      title: '',
      publication: '',
      date: '',
      link: '',
      description: ''
    });
  }

  const warnings = 'Date must be in the following format: "YYYY-MM-DD". Enter tags and categories as comma-seperated lists.'
  const fields = [{ name: 'title', content: `${current.title}` }, { name: 'publication', content: `${current.publication}` }, { name: 'date', content: `${current.date}` }, { name: 'link', content: `${current.link}` }, { name: 'description', content: `${current.description}` }, {name: 'tags', content: `${current.tags}`}, {name: 'image', content: `${current.image}`}, {name: 'alt', content: `${current.alt}`}]

  const handleAddFormChange = e => {
    const { name, value } = e.target;
    setCurrent({
      ...current,
      [name]: value
    });
  }

  const addNewsArticle = () => {
    setUpdating(false);
    API.createNewsArticle(current, token).then(res => {
      if (res.data) {
        store.dispatch(fetchNewsArticles())
      }
      clearCurrent();
      hideEditForm();
      setIndicator({
        open: true,
        severity: 'success',
        message: 'Successfully added news article.'
      });
    }).catch(err => {
      setIndicator({
        open: true,
        severity: 'error',
        message: `Error adding news article: ${err.message}`
      });
    });
  }

  const grabCurrent = e => {
    setUpdating(true);
    e.preventDefault();
    const title = e.currentTarget.getAttribute('data-title')
    const publication = e.currentTarget.getAttribute('data-publication')
    const date = e.currentTarget.getAttribute('data-date')
    const link = e.currentTarget.getAttribute('data-link')
    const description = e.currentTarget.getAttribute('data-description')
    const id = e.currentTarget.getAttribute('data-id')
    const tags = e.currentTarget.getAttribute('data-tags')
    const image = e.currentTarget.getAttribute('data-image')
    const alt = e.currentTarget.getAttribute('data-alt')

    description ? setCurrent({
      title: title,
      publication: publication,
      date: date,
      link: link,
      description: description,
      tags: tags,
      image: image,
      alt: alt
    }) : setCurrent({
      title: title,
      publication: publication,
      date: date,
      link: link,
      tags: tags,
      image: image,
      alt: alt
    })
    setCurrentID(id)
    showEditForm();
  }

  const removeCurrent = e => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute('data-id')
    API.deleteNewsArticle(id, token).then(res => {
      if (res) {
        store.dispatch(fetchNewsArticles())
        setIndicator({
          open: true,
          severity: 'success',
          message: 'Successfully deleted news article.'
        });
      }
    }).catch(err => {
      setIndicator({
        open: true,
        severity: 'error',
        message: `Error deleting news article: ${err.message}`
      });
    });
  }

  const updateMe = e => {
    e.preventDefault();
    API.updateNewsArticle(currentID, current, token).then(res => {
      if (res) {
        console.log(res);
        store.dispatch(fetchNewsArticles())
      }
      clearCurrent();
      hideEditForm();
      setUpdating(false);
      setIndicator({
        open: true,
        severity: 'success',
        message: 'Successfully updated news article.'
      });
    }).catch(err => {
      if (err) {
        setIndicator({
          open: true,
          severity: 'error',
          message: `Error updating news article: ${err.message}`
        });
      }
    });
  }

  const saveCurrentNews = e => {
    e.preventDefault();
    setUpdating(false)
    const savedArticle = JSON.stringify(current)
    localStorage.setItem('currentArticle', savedArticle)
    setIndicator({
      open: true,
      severity: 'success',
      message: 'News Article successfully saved.'
    });
    hideEditForm();
  }

  const grabSavedNews = e => {
    e.preventDefault();
    setUpdating(true);
    const savedArticle = JSON.parse(localStorage.getItem('currentArticle'));
    setCurrent({ ...savedArticle });
    showEditForm();
  }



  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ProgressIndicator open={indicator.open} message={indicator.message} severity={indicator.severity} handleClose={handleClose}></ProgressIndicator>
          <h1>Current News Articles</h1>
          <br />
        </Grid>
        {editing ?
          <Grid container spacing={1} justify='space-evenly'>
            <Grid item xs={12} sm={10}>
              <AddForm section='News Article' message={warnings} fields={fields} handleAddFormChange={handleAddFormChange} updateMe={updating ? updateMe : addNewsArticle} show={editing} showForm={showEditForm} saveCurrent={saveCurrentNews} grabSaved={grabSavedNews} />
            </Grid>
          </Grid> :
          <Grid container spacing={1}>
            <Grid item xs={11} sm={10} className={classes.infoCards}>
              {articles?.map(article =>
                <BlogCard id='#' title={article.title} alt={'not a cat'} publication={article.publication} date={article.date} link={article.link} description={article.description} id={article._id} confirm={removeCurrent} grabMe={grabCurrent} view='admin' type='News Article' />
              )}
            </Grid>
            <Grid item xs={12} sm={2}>
              <AddForm section='News Article' message={warnings} fields={fields} handleAddFormChange={handleAddFormChange} updateMe={updating ? updateMe : addNewsArticle} show={editing} showForm={showEditForm} saveCurrent={saveCurrentNews} grabSaved={grabSavedNews} />
            </Grid>
          </Grid>}
      </Grid>
    </div>
  )

}

export default News;