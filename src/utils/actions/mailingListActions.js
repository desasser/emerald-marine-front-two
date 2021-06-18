import axios from 'axios';

const URL_PREFIX = 'https://designly-freelance-back.herokuapp.com'

const fetchMailingListSuccess = mailingList => ({
    type: 'FETCH_MAILING_LIST_SUCCESS',
    payload: {mailingList}
})

const fetchMailingListFailure = err => ({
    type: 'FETCH_MAILING_LIST_FAILURE',
    payload: err.message
})

export const fetchMailingList = token => {
    return async dispatch => {
        try {
            let res = await axios.get(`${URL_PREFIX}/mailing`, {
                headers: {
                    authorization: `Bearer: ${token}`
                }
            });
            dispatch(fetchMailingListSuccess(res))
        }
        catch(err) {
            dispatch(fetchMailingListFailure(err));
        }
    }
}