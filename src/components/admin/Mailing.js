import React, {useState} from "react";
import Grid from '@material-ui/core/Grid';
import MailingCard from './MailingCard';
import AlertModal from './AlertModal';
import API from '../../utils/API';
import store from '../../utils/store';

const Mailing = () => {
    const token = localStorage.getItem('token')
    const [current, setCurrent] = useState({
        name: '',
        email: ''
    });

    const openAlertModal = () => {
        store.dispatch({
            type: 'SHOW_MODAL'
        });
    }

    const mailingList = store.getState().mailingList.mailingList
    const testList = store.getState().testList.testList

    const removeMailingList = e => {
        const email = e.currentTarget.getAttribute('data-email');
        const id = e.currentTarget.getAttribute('data-id');
        const newMailingList = mailingList.filter(list => list._id !== id);
        API.removeFromMailingList(email).then(res => {
            store.dispatch({
                type: 'GET_MAILING_LIST',
                payload: {
                    ...store.getState.mailingList,
                    mailingList: newMailingList
                }
            });
            openAlertModal();
        }).catch(err => {
            console.log(err.message)
        })
    }

    const removeTestList = e => {
        const email = e.currentTarget.getAttribute('data-email');
        const id = e.currentTarget.getAttribute('data-id');
        const newTestList = testList.filter(list => list._id !== id);
        API.removeFromTestList(email).then(res => {
            console.log(res)
            store.dispatch({
                type: 'GET_TEST_LIST',
                payload: {
                    ...store.getState.testList,
                    testList: newTestList
                }
            });
            openAlertModal();
        }).catch(err => {
            console.log(err.message)
        })
    }
    const updateMailing = e => {
        const id = e.currentTarget.getAttribute('data-id');
        const name = e.currentTarget.getAttribute('data-name');
        const email = e.currentTarget.getAttribute('data-email');

        setCurrent({
            name: name,
            email: email
        })

    }

    const updateTest = e => {
        const email = e.currentTarget.getAttribute('data-email');
        const name = e.currentTarget.getAttribute('data-name');
        const id = e.currentTarget.getAttribute('data-id');

        setCurrent({
            name: name,
            email: email
        })

    }

    return (
        <div>
            <AlertModal title={'Unsubscribed successfully!'}/>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                <h1>Mailing List Subscribers</h1>
                <br/>
                {mailingList.map(list => 
                <MailingCard name={list.name} email={list.email} id={list._id} removeMe={removeMailingList} updateMe={updateMailing}/>   
                )}
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <h1>Product Test Reminder Subscribers</h1>
                    <br/>
                    {testList.map(list => 
                    <MailingCard name={list.name} email={list.email} id={list._id} removeMe={removeTestList} updateMe={updateTest}/> 
                    )}
                </Grid>
            </Grid>
        
    
        </div>
    )
    
}

export default Mailing;