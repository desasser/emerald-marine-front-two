import React, {useState} from "react";
import {useSelector} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MailingCard from './MailingCard';
import AddForm from './AddForm';
import API from '../../utils/API';
import store from '../../utils/store';
import {fetchMailingList} from '../../utils/actions/mailingListActions';
import {fetchTestList} from '../../utils/actions/testListActions';

const useStyles = makeStyles((theme) => ({        
    infoCards: {
        maxHeight: '50vh',
        overflow: 'scroll'
    }
  }));

const Mailing = () => {
    const classes=useStyles();
    const token = localStorage.getItem('token');
    const mailingList = useSelector(state => state.mailingList.mailingList);
    const testList = useSelector(state => state.testList.testList);

    const [current, setCurrent] = useState({email: ''});
    const [currentID, setCurrentID] = useState('')
    const [editing, setEditing] = useState(false);

    const showEditForm = () => {
        setEditing(true)
    }

    const hideEditForm = () => {
        setEditing(false)
    }

    const clearCurrent = () => {
        setCurrent({email: ''})
    }

    const fields = [{name: 'email', content: `${current.email}`}];

    const handleAddFormChange = e => {
        const {name, value} = e.target;
        setCurrent({
            ...current,
            [name]: value
        });
    }

    const addToMailingList = e => {
        e.preventDefault();
        API.addToMailingList(current).then(res => {
            if(res.data) {
                store.dispatch(fetchMailingList(token))
            }
            clearCurrent();
            hideEditForm();
        }).catch(err => {
            console.log(err.message)
        })
    }

    const addToTestList = e => {
        e.preventDefault();
        API.addToTestList(current).then(res => {
            if(res.data) {
                store.dispatch(fetchTestList(token))
            }
            clearCurrent();
            hideEditForm();
        }).catch(err => {
            console.log(err.message)
        })
    }

    const removeMailingList = e => {
        const email = e.currentTarget.getAttribute('data-email');
        API.removeFromMailingList(email).then(res => {
            if(res) {
                store.dispatch(fetchMailingList(token))
            }
        }).catch(err => {
            console.log(err.message)
        });
    }

    const removeTestList = e => {
        const email = e.currentTarget.getAttribute('data-email');
        API.removeFromTestList(email).then(res => {
            if(res) {
                store.dispatch(fetchTestList(token))
            }
        }).catch(err => {
            console.log(err.message)
        });
    }

    const grabCurrent = e => {
        const id = e.currentTarget.getAttribute('data-id');
        const name = e.currentTarget.getAttribute('data-name');
        const email = e.currentTarget.getAttribute('data-email');
        setCurrent({
            name: name,
            email: email
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
        }).catch(err => {
            if(err) {
                console.log(err.message)
            }
        });
    }

    const updateCurrentTest = e => {
        e.preventDefault();
        API.updateTestList(current, currentID, token).then(res => {
            store.dispatch(fetchTestList(token))
            clearCurrent();
            hideEditForm();
        }).catch(err => {
            console.log(err.message)
        });
    }

    return (
        <div>
            {editing ? 
            <Grid container spacing={2}>
            <Grid item xs={6} className={classes.infoCards}>
            <h1>Mailing List Subscribers</h1>
            <br/>
            {mailingList?.map(list => 
            <MailingCard name={list.name} email={list.email} id={list._id} removeMe={removeMailingList} grabMe={grabCurrent}/>   
            )}
            </Grid>
            <Grid item xs={6}>
                <AddForm section='Subscriber' fields = {fields} handleAddFormChange={handleAddFormChange} addMe={addToMailingList} updateMe={updateCurrentMailing}/>
            </Grid>
        </Grid> :
        <Grid container spacing={2}>
            <Grid item xs={12} className={classes.infoCards}>
            <h1>Mailing List Subscribers</h1>
            {mailingList?.map(list => 
            <MailingCard name={list.name} email={list.email} id={list._id} removeMe={removeMailingList} grabMe={grabCurrent}/>   
            )}
            </Grid>
        </Grid>}
            {editing ? 
            <Grid container spacing={2}>
            <Grid item xs={6} className={classes.infoCards}>
                <h1>Product Test Reminder Subscribers</h1>
                <br/>
                {testList?.map(list => 
                <MailingCard name={list.name} email={list.email} id={list._id} removeMe={removeTestList} grabMe={grabCurrent}/> 
                )}
            </Grid>
            <Grid item xs={6}>
                <AddForm section='Subscriber' fields = {fields} handleAddFormChange={handleAddFormChange} addMe={addToTestList} updateMe={updateCurrentTest}/>
            </Grid>
        </Grid> :
        <Grid container spacing={2}>
            <Grid item xs={12} className={classes.infoCards}>
            <h1>Product Test Reminder Subscribers</h1>
            {testList?.map(list => 
                <MailingCard name={list.name} email={list.email} id={list._id} removeMe={removeTestList} grabMe={grabCurrent}/> 
                )}
            </Grid>
        </Grid>}
        
    
        </div>
    )
    
}

export default Mailing;