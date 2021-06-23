import React, {useState} from "react";
import {useSelector} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import MailingCard from './MailingCard';
import AddForm from './AddForm';
import API from '../../utils/API';
import store from '../../utils/store';
import {fetchMailingList} from '../../utils/actions/mailingListActions';
import {fetchTestList} from '../../utils/actions/testListActions';

const Mailing = () => {
    const token = localStorage.getItem('token');
    const mailingList = useSelector(state => state.mailingList.mailingList);
    const testList = useSelector(state => state.testList.testList);

    const [current, setCurrent] = useState({email: ''});
    const [currentID, setCurrentID] = useState('')

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
    }

    const updateCurrentMailing = e => {
        e.preventDefault();
        API.updateMailingList(current, currentID, token).then(res => {
            if(res) {
                store.dispatch(fetchMailingList(token))
            }
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
        }).catch(err => {
            console.log(err.message)
        });
    }

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                <h1>Mailing List Subscribers</h1>
                <br/>
                {mailingList?.map(list => 
                <MailingCard name={list.name} email={list.email} id={list._id} removeMe={removeMailingList} grabMe={grabCurrent}/>   
                )}
                </Grid>
                <Grid item xs={6}>
                    <AddForm section='Mailing List' fields = {fields} handleAddFormChange={handleAddFormChange} addMe={addToMailingList} updateMe={updateCurrentMailing}/>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <h1>Product Test Reminder Subscribers</h1>
                    <br/>
                    {testList?.map(list => 
                    <MailingCard name={list.name} email={list.email} id={list._id} removeMe={removeTestList} grabMe={grabCurrent}/> 
                    )}
                </Grid>
                <Grid item xs={6}>
                    <AddForm section='Testing Reminders List' fields = {fields} handleAddFormChange={handleAddFormChange} addMe={addToTestList} updateMe={updateCurrentTest}/>
                </Grid>
            </Grid>
        
    
        </div>
    )
    
}

export default Mailing;