import axios from 'axios';

const URL_PREFIX = 'https://designly-freelance-back.herokuapp.com'

const fetchTestListSuccess = testList => ({
    type: 'FETCH_TEST_LIST_SUCCESS',
    payload: testList
})

const fetchTestListFailure = err => ({
    type: 'FETCH_TEST_LIST_FAILURE',
    payload: err.message
})

export const fetchTestList = token => {
    return async dispatch => {
        try {
            let res = await axios.get(`${URL_PREFIX}/test`, {
                headers: {
                    authorization: `Bearer: ${token}`
                }
            });
            dispatch(fetchTestListSuccess(res))
        }
        catch(err) {
            dispatch(fetchTestListFailure(err));
        }
    }
}