import React, {useState} from "react";
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import BlogCard from '../BlogCard';
import AddForm from './AddForm';
import store from '../../utils/store';
import API from '../../utils/API';
import { updatePressReleases } from "../../utils/helpers/updateStore";


const Press = () => {
    const releases = store.getState().pressReleases.pressReleases;
    const token = localStorage.getItem('token');
    const [current, setCurrent] = useState({
        title: '',
        image: '',
        date: '',
        alt: '',
        content: ''
    });

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
                updatePressReleases();
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
                    <h1>Current Press Releases</h1>
                    <br/>
                </Grid>
                <Grid container spacing={3} justify='space-evenly'>
                    {releases.map(release => 
                        <Grid item xs={6}>
                            <BlogCard id='#' title={release.title} image={release.image} alt={release.alt} children={release.date}/>
                            <Button size="small" onClick={removeMe}>Delete Press Release</Button>
                            <Button size="small" onClick={updateMe}>Edit Press Release</Button>
                        </Grid>)}
                </Grid>
                <Grid item xs={12}>
                    <AddForm section='Press Releases' message={warnings} fields={fields} handleAddFormChange={handleAddFormChange} addMe={addPressRelease}/>
                </Grid>
            </Grid>
        </div>
    )
    
}

export default Press;