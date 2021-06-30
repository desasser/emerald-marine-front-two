import React, {useState} from "react";
import {useSelector} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MailingCard from './MailingCard';
import ProgressIndicator from './ProgressIndicator';
import AddForm from './AddForm';
import API from '../../utils/API';
import store from '../../utils/store';
import {fetchMailingList} from '../../utils/actions/mailingListActions';
import {fetchTestList} from '../../utils/actions/testListActions';

const token = localStorage.getItem('token')
store.dispatch(fetchMailingList(token));
store.dispatch(fetchTestList(token));

const useStyles = makeStyles((theme) => ({        
    infoCards: {
        maxHeight: '75vh',
        overflow: 'scroll'
    }
  }));

const Mailing = () => {
    const classes=useStyles();
    const mailingList = useSelector(state => state.mailingList.mailingList);
    const testList = useSelector(state => state.testList.testList);

    const [current, setCurrent] = useState({
        email: '',
        first: '',
        last: '',
        company: ''});
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
            email: '', 
            first: '',
            last: '',
            company: ''});
    }

    const fields = [{name: 'email', content: `${current.email}`}, {name: 'first', content: `${current.first}`}, {name: 'last', content: `${current.last}`}, {name: 'company', content: `${current.company}`}];

    const handleAddFormChange = e => {
        const {name, value} = e.target;
        setCurrent({
            ...current,
            [name]: value
        });
    }

    const addToMailingList = e => {
        setUpdating(false);
        e.preventDefault();
        API.addToMailingList(current).then(res => {
            if(res.data) {
                store.dispatch(fetchMailingList(token))
            }
            clearCurrent();
            hideEditForm();
            setIndicator({
                open: true,
                severity: 'success',
                message: 'Successfully subscribed to mailing list.'
            });
        }).catch(err => {
            setIndicator({
                open: true,
                severity: 'error',
                message: `Error subscribing to mailing list: ${err.message}`
            });
        })
    }

    const addToTestList = e => {
        setUpdating(false);
        e.preventDefault();
        API.addToTestList(current).then(res => {
            if(res.data) {
                store.dispatch(fetchTestList(token))
            }
            clearCurrent();
            hideEditForm();
            setIndicator({
                open: true,
                severity: 'success',
                message: 'Successfully subscribed to testing reminders list.'
            });
        }).catch(err => {
            setIndicator({
                open: true,
                severity: 'error',
                message: `Error subscribing to testing reminders list: ${err.message}`
            });
        })
    }

    const removeMailingList = e => {
        const id = e.currentTarget.getAttribute('data-id');
        API.removeFromMailingList(id).then(res => {
            if(res) {
                store.dispatch(fetchMailingList(token))
            }
            setIndicator({
                open: true,
                severity: 'success',
                message: 'Successfully unsubscribed from mailing list.'
            });
        }).catch(err => {
            setIndicator({
                open: true,
                severity: 'error',
                message: `Error unsubscribing from mailing list: ${err.message}`
            });
        });
    }

    const removeTestList = e => {
        const id = e.currentTarget.getAttribute('data-id');
        API.removeFromTestList(id).then(res => {
            if(res) {
                store.dispatch(fetchTestList(token))
            }
            setIndicator({
                open: true,
                severity: 'success',
                message: 'Successfully unsubscribed from testing reminders list.'
            });
        }).catch(err => {
            setIndicator({
                open: true,
                severity: 'error',
                message: `Error unsubscribing from testing reminders list: ${err.message}`
            });
        });
    }

    const grabCurrent = e => {
        setUpdating(true)
        const id = e.currentTarget.getAttribute('data-id');
        const first = e.currentTarget.getAttribute('data-first');
        const last = e.currentTarget.getAttribute('data-last');
        const company = e.currentTarget.getAttribute('data-company');
        const email = e.currentTarget.getAttribute('data-email');
        setCurrent({
            email: email,
            first: first,
            last: last,
            company: company
        });
        setCurrentID(id)
        showEditForm();
    }

    const updateCurrentMailing = e => {
        e.preventDefault();
        API.updateMailingList(current, currentID, token).then(res => {
            if(res) {
                store.dispatch(fetchMailingList(token))
            }
            clearCurrent();
            hideEditForm();
            setUpdating(false);
            setIndicator({
                open: true,
                severity: 'success',
                message: 'Successfully updated subscriber information.'
            });
        }).catch(err => {
            if(err) {
                setIndicator({
                    open: true,
                    severity: 'error',
                    message: `Error updating subscriber information: ${err.message}`
                });
            }
        });
    }

    const updateCurrentTest = e => {
        e.preventDefault();
        API.updateTestList(current, currentID, token).then(res => {
            store.dispatch(fetchTestList(token))
            clearCurrent();
            hideEditForm();
            setUpdating(false);
            setIndicator({
                open: true,
                severity: 'success',
                message: 'Successfully updated subscriber information.'
            });
        }).catch(err => {
            setIndicator({
                open: true,
                severity: 'error',
                message: `Error updating subscriber information: ${err.message}`
            });
        });
    }

    return (
        <div>
            {editing ? 
            <Grid container spacing={2}>
            <Grid item xs={6} className={classes.infoCards}>
            <ProgressIndicator open={indicator.open} message={indicator.message} severity={indicator.severity} handleClose={handleClose}></ProgressIndicator>
            <h1>Mailing List Subscribers</h1>
            <br/>
            {mailingList?.map(list => 
            <MailingCard first={list.first} last={list.last} company={list.company} email={list.email} id={list._id} confirm={removeMailingList} grabMe={grabCurrent}/>   
            )}
            </Grid>
            <Grid item xs={6}>
                <AddForm section='Subscriber' fields = {fields} handleAddFormChange={handleAddFormChange} updateMe={updating ? updateCurrentMailing : addToMailingList} show={editing} showForm={showEditForm}/>
            </Grid>
        </Grid> :
        <Grid container spacing={2}>
            <Grid item xs={9} className={classes.infoCards}>
            <h1>Mailing List Subscribers</h1>
            {mailingList?.map(list => 
            <MailingCard first={list.first} last={list.last} company={list.company} email={list.email} id={list._id} confirm={removeMailingList} grabMe={grabCurrent}/>   
            )}
            </Grid>
            <Grid item xs={2}>
                <AddForm section='Subscriber' fields = {fields} handleAddFormChange={handleAddFormChange} updateMe={updating ? updateCurrentMailing : addToMailingList} show={editing} showForm={showEditForm}/>
            </Grid>
        </Grid>}
            {editing ? 
            <Grid container spacing={2}>
            <Grid item xs={6} className={classes.infoCards}>
                <h1>Product Test Reminder Subscribers</h1>
                <br/>
                {testList?.map(list => 
                <MailingCard name={list.name} email={list.email} id={list._id} confirm={removeTestList} grabMe={grabCurrent}/> 
                )}
            </Grid>
            <Grid item xs={6}>
                <AddForm section='Subscriber' fields = {fields} handleAddFormChange={handleAddFormChange} updateMe={updating ? updateCurrentTest : addToTestList} show={editing} showForm={showEditForm}/>
            </Grid>
        </Grid> :
        <Grid container spacing={2}>
            <Grid item xs={9} className={classes.infoCards}>
            <h1>Product Test Reminder Subscribers</h1>
            {testList?.map(list => 
                <MailingCard first={list.first} last={list.last} company={list.company} email={list.email} id={list._id} confirm={removeTestList} grabMe={grabCurrent}/> 
                )}
            </Grid>
            <Grid item xs={2}>
                <AddForm section='Subscriber' fields = {fields} handleAddFormChange={handleAddFormChange} updateMe={updating ? updateCurrentTest : addToTestList} show={editing} showForm={showEditForm}/>
            </Grid>
        </Grid>}
        
        </div>
    )
    
}

export default Mailing;