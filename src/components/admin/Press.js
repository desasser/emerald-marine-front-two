import React, {useState} from "react";
import {useSelector} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import BlogCard from '../BlogCard';
import AddForm from './AddForm';
import store from '../../utils/store';
import API from '../../utils/API';
import {fetchPressReleases} from '../../utils/actions/pressReleaseActions';


const Press = () => {
    const releases = useSelector(state => state.pressReleases.pressReleases)
    const token = localStorage.getItem('token');
    const [current, setCurrent] = useState({
        title: '',
        image: '',
        date: '',
        alt: '',
        content: ''
    });
    const [currentID, setCurrentID] = useState('')

    const warnings = 'Date must be in the following format: "YYYY-MM-DD".'
    const fields = [{name: 'title', content: `${current.title}`}, {name: 'image', content: `${current.image}`}, {name: 'date', content: `${current.date}`}, {name: 'alt', content: `${current.alt}`}, {name: 'content', content: `${current.content}`}]

    const handleAddFormChange = e => {
        const {name, value} = e.target;
        setCurrent({
            ...current,
            [name]: value
        });
    }

    const addPressRelease = () => {
        API.createPressRelease(current, token).then(res => {
            if(res.data) {
                store.dispatch(fetchPressReleases())
            }
        }).catch(err => {
            console.log(err.message)
        });
    }

    const grabCurrent = e => {
        e.preventDefault();
        const title = e.currentTarget.getAttribute('data-title')
        const date = e.currentTarget.getAttribute('data-date')
        const image = e.currentTarget.getAttribute('data-image')
        const alt = e.currentTarget.getAttribute('data-alt')
        const content = e.currentTarget.getAttribute('data-content')
        const id = e.currentTarget.getAttribute('data-id')

        setCurrent({
            title: title,
            date: date,
            image: image,
            alt: alt,
            content: content
        })
        setCurrentID(id)
    }

    const removeCurrent = e => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute('data-id')
        API.deletePressRelease(id, token).then(res => {
            if(res) {
                console.log(res);
                store.dispatch(fetchPressReleases())
            }
        }).catch(err => {
            if(err) {
                console.log(err.message)
            }
        });
    }

    const updateMe = e => {
        e.preventDefault();
        API.updatePressRelease(currentID, current, token).then(res => {
            if(res) {
                console.log(res.data);
                store.dispatch(fetchPressReleases())
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
                    <h1>Current Press Releases</h1>
                    <br/>
                </Grid>
                <Grid container spacing={1} justify='space-evenly'>
                    <Grid item xs={6}>
                    {releases?.map(release => 
                            <BlogCard id='#' title={release.title} image={release.image} alt={release.alt} date={release.date} content={release.content} id={release._id} view='admin' type='Press Release' removeMe={removeCurrent} grabMe={grabCurrent}/>
                       )}
                    </Grid>
                    <Grid item xs={4}>
                    <AddForm section='Press Releases' message={warnings} fields={fields} handleAddFormChange={handleAddFormChange} addMe={addPressRelease} updateMe={updateMe}/>
                </Grid>
                </Grid>
            </Grid>
        </div>
    )
    
}

export default Press;