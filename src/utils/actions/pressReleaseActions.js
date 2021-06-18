import axios from 'axios';

const URL_PREFIX = 'https://designly-freelance-back.herokuapp.com'

const fetchPressReleasesSuccess = pressReleases => ({
    type: 'FETCH_PRESS_RELEASES_SUCCESS',
    payload: {pressReleases}
})

const fetchPressReleasesFailure = err => ({
    type: 'FETCH_PRESS_RELEASES_FAILURE',
    payload: err.message
})

export const fetchPressReleases = () => {
    return async dispatch => {
        try {
            let res = axios.get(`${URL_PREFIX}/press`)
            dispatch(fetchPressReleasesSuccess(res.data))
        }
        catch(err) {
            dispatch(fetchPressReleasesFailure(err));
        }
    }
}