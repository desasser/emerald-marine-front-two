import React from "react";
import Grid from '@material-ui/core/Grid';
import BlogCard from '../BlogCard';
import store from '../../utils/store';


const Press = () => {
    const releases = store.getState().pressReleases.pressReleases
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
                        </Grid>)}
                </Grid>
            </Grid>
        </div>
    )
    
}

export default Press;