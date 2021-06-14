import React, {useState} from "react";
import Grid from '@material-ui/core/Grid';
import MailingCard from './MailingCard';
import AlertModal from './AlertModal';
import AddForm from './AddForm';
import API from '../../utils/API';
import store from '../../utils/store';
import {updateMailingList, updateTestList} from '../../utils/helpers/updateStore';

const Mailing = () => {
    const token = localStorage.getItem('token');
    const mailingList = store.getState().mailingList.mailingList
    const testList = store.getState().testList.testList

    const [current, setCurrent] = useState({
        name: '',
        email: ''
    });

    const fields = [{name: 'name', content: `${current.name}`}, {name: 'email', content: `${current.email}`}];

    const openAlertModal = () => {
        store.dispatch({
            type: 'SHOW_MODAL'
        });
    }

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
                updateMailingList();
            }
        }).catch(err => {
            console.log(err.message)
        })
    }

    const addToTestList = e => {
        e.preventDefault();
        API.addToTestList(current).then(res => {
            if(res.data) {
                updateTestList();
            }
        }).catch(err => {
            console.log(err.message)
        })
    }

    const removeMailingList = e => {
        const email = e.currentTarget.getAttribute('data-email');
        API.removeFromMailingList(email).then(res => {
            if(res) {
            updateMailingList();
            }
            openAlertModal();
        }).catch(err => {
            console.log(err.message)
        });
    }

    const removeTestList = e => {
        const email = e.currentTarget.getAttribute('data-email');
        API.removeFromTestList(email).then(res => {
            if(res) {
                updateTestList();
            }
            openAlertModal();
        }).catch(err => {
            console.log(err.message)
        });
    }

    const updateMailing = e => {
        const id = e.currentTarget.getAttribute('data-id');
        const name = e.currentTarget.getAttribute('data-name');
        const email = e.currentTarget.getAttribute('data-email');
        setCurrent({
            name: name,
            email: email
        });
    }

    const updateTest = e => {
        const email = e.currentTarget.getAttribute('data-email');
        const name = e.currentTarget.getAttribute('data-name');
        const id = e.currentTarget.getAttribute('data-id');
        setCurrent({
            name: name,
            email: email
        });
    }

    return (
        <div>
            <AlertModal title={'Unsubscribed successfully!'}/>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                <h1>Mailing List Subscribers</h1>
                <br/>
                {mailingList.map(list => 
                <MailingCard name={list.name} email={list.email} id={list._id} removeMe={removeMailingList} updateMe={updateMailing}/>   
                )}
                </Grid>
                <Grid item xs={6}>
                    <AddForm section='Mailing List' fields = {fields} handleAddFormChange={handleAddFormChange} addMe={addToMailingList}/>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <h1>Product Test Reminder Subscribers</h1>
                    <br/>
                    {testList.map(list => 
                    <MailingCard name={list.name} email={list.email} id={list._id} removeMe={removeTestList} updateMe={updateTest}/> 
                    )}
                </Grid>
                <Grid item xs={6}>
                    <AddForm section='Testing Reminders List' fields = {fields} handleAddFormChange={handleAddFormChange} addMe={addToTestList}/>
                </Grid>
            </Grid>
        
    
        </div>
    )
    
}

export default Mailing;