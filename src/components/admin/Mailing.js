import React, {useState, useEffect} from "react";
import Grid from '@material-ui/core/Grid';
import MailingCard from './MailingCard';
import AdminButton from './AdminButton';
import API from '../../utils/API';
import store from '../../utils/store';

const Mailing = () => {
    const token = localStorage.getItem('token')

    const mailingList = store.getState().mailingList.mailingList
    const testList = store.getState().testList.testList

    const removeMe = () => {
        console.log('Removed!');
    }
    const updateMe = () => {
        console.log('Updated!')
    }

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                <h1>Mailing List Subscribers</h1>
                <br/>
                {mailingList.map(list => 
                <MailingCard name={list.name} email={list.email} removeMe={removeMe} updateMe={updateMe}/>   
                )}
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <h1>Product Test Reminder Subscribers</h1>
                    <br/>
                    {testList.map(list => 
                    <MailingCard name={list.name} email={list.email} removeMe={removeMe} updateMe={updateMe}/> 
                    )}
                </Grid>
            </Grid>
        
    
        </div>
    )
    
}

export default Mailing;