import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BlogCard from '../BlogCard';
import ProgressIndicator from './ProgressIndicator';
import AddForm from './AddForm';
import store from '../../utils/store';
import API from '../../utils/API';
import { fetchPressReleases } from '../../utils/actions/pressReleaseActions';

const useStyles = makeStyles((theme) => ({
  infoCards: {
    maxHeight: '75vh',
    overflowY: 'scroll',
  },
  cards: {
    marginTop: '5vh'
  }
}));


const Press = () => {
  const classes = useStyles();
  const releases = useSelector(state => state.pressReleases.pressReleases)
  const token = localStorage.getItem('token');
  const [current, setCurrent] = useState({
    title: '',
    image: '',
    date: '',
    alt: '',
    categories: '',
    content: ''
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
      image: '',
      date: '',
      alt: '',
      content: '',
      categories: ''
    });
  }

  const warnings = 'Date must be in the following format: "YYYY-MM-DD".'
  const fields = [{ name: 'title', content: `${current.title}` }, { name: 'image', content: `${current.image}` }, { name: 'date', content: `${current.date}` }, { name: 'alt', content: `${current.alt}` }, { name: 'content', content: `${current.content}` }, { name: 'categories', content: `${current.categories}` }]

  const handleAddFormChange = e => {
    const { name, value } = e.target;
    setCurrent({
      ...current,
      [name]: value
    });
  }

  const addPressRelease = () => {
    setUpdating(false);
    // console.log(`Here's what we sent: ${JSON.stringify(current, null, 2)}`)
    API.createPressRelease(current, token).then(res => {
      if (res.data) {
        store.dispatch(fetchPressReleases())
        clearCurrent();
        hideEditForm();
        setIndicator({
          open: true,
          severity: 'success',
          message: 'Successfully added press release.'
        });
      }
    }).catch(err => {
      setIndicator({
        open: true,
        severity: 'error',
        message: `Error adding press release: ${err.message}`
      });
    });
  }


  const grabCurrent = e => {
    setUpdating(true);
    e.preventDefault();
    const title = e.currentTarget.getAttribute('data-title')
    const date = e.currentTarget.getAttribute('data-date')
    const image = e.currentTarget.getAttribute('data-image')
    const alt = e.currentTarget.getAttribute('data-alt')
    const content = e.currentTarget.getAttribute('data-content')
    const id = e.currentTarget.getAttribute('data-id')
    const categories = e.currentTarget.getAttribute('data-categories')

    setCurrent({
      title: title,
      date: date,
      image: image,
      alt: alt,
      content: content,
      categories: categories
    })
    setCurrentID(id)
    showEditForm();
  }

  const removeCurrent = e => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute('data-id')
    API.deletePressRelease(id, token).then(res => {
      if (res) {
        store.dispatch(fetchPressReleases())
        setIndicator({
          open: true,
          severity: 'success',
          message: 'Successfully deleted press release.'
        });
      }
    }).catch(err => {
      if (err) {
        setIndicator({
          open: true,
          severity: 'error',
          message: `Error deleting press release: ${err.message}`
        });
      }
    });
  }

  const updateMe = e => {
    e.preventDefault();
    API.updatePressRelease(currentID, current, token).then(res => {
      if (res) {
        store.dispatch(fetchPressReleases())
      }
      clearCurrent();
      hideEditForm();
      setUpdating(false);
      setIndicator({
        open: true,
        severity: 'success',
        message: 'Successfully updated press release.'
      });
    }).catch(err => {
      if (err) {
        setIndicator({
          open: true,
          severity: 'error',
          message: `Error updating press release: ${err.message}`
        });
      }
    })
  }

  const saveCurrentPress = e => {
    e.preventDefault();
    setUpdating(false)
    const savedPress = JSON.stringify(current)
    localStorage.setItem('currentPress', savedPress)
    setIndicator({
      open: true,
      severity: 'success',
      message: 'Press release successfully saved.'
    });
    hideEditForm();
  }

  const grabSavedPress = e => {
    e.preventDefault();
    setUpdating(true);
    const savedPress = JSON.parse(localStorage.getItem('currentPress'));
    setCurrent({ ...savedPress });
    showEditForm();
  }

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ProgressIndicator open={indicator.open} message={indicator.message} severity={indicator.severity} handleClose={handleClose}></ProgressIndicator>
          <h1>Current Press Releases</h1>
          <br />
        </Grid>
        {editing ?
          <Grid container spacing={1} justify='space-evenly'>
            <Grid item xs={12} sm={10}>
              <AddForm section='Press Release' message={warnings} fields={fields} handleAddFormChange={handleAddFormChange} updateMe={updating ? updateMe : addPressRelease} show={editing} showForm={showEditForm} saveCurrent={saveCurrentPress} grabSaved={grabSavedPress} />
            </Grid>
          </Grid> :
          <Grid container spacing={1}>
            <Grid item xs={11} sm={10} spacing={2} className={classes.infoCards}>
              {releases?.map(release =>
                <BlogCard id='#' title={release.title} image={release.image} alt={release.alt} date={release.date} content={release.content} id={release._id} view='admin' type='Press Release' confirm={removeCurrent} grabMe={grabCurrent} className={classes.cards} categories={release.categories} />
              )}
            </Grid>
            <Grid item xs={12} sm={2}>
              <AddForm section='Press Release' message={warnings} fields={fields} handleAddFormChange={handleAddFormChange} updateMe={updating ? updateMe : addPressRelease} show={editing} showForm={showEditForm} saveCurrent={saveCurrentPress} grabSaved={grabSavedPress} />
            </Grid>
          </Grid>}
      </Grid>
    </div>
  )

}

export default Press;