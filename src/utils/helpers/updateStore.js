import API from '../../utils/API';
import store from '../../utils/store';

const token = localStorage.getItem('token');

export const updateMailingList = () => {
    API.getMailingList(token).then(res => {
        store.dispatch({
            type: 'GET_MAILING_LIST',
            payload: {
                mailingList: res.data
            }
        });
    }).catch(err => {
    const errorCode = err.message.split(' ')[5]
    if(errorCode===401) {
        localStorage.removeItem('token');
    } else {
        console.log(err.message)
    }
    });
}

export const updateTestList = () => {
    API.getTestList(token).then(res => {
        store.dispatch({
            type: 'GET_TEST_LIST',
            payload: {
                testList: res.data
            }
        })
    }).catch(err => {
        const errorCode = err.message.split(' ')[5]
        if(errorCode===401) {
            localStorage.removeItem('token');
        } else {
            console.log(err.message)
        }
    });
}