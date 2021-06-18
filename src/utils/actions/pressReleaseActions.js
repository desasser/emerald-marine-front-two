import axios from 'axios';

const URL_PREFIX = 'https://designly-freelance-back.herokuapp.com'

const fetchPressReleasesSuccess = pressReleases => ({
    type: 'FETCH_PRESS_RELEASES_SUCCESS',
    payload: pressReleases
})

const fetchPressReleasesFailure = err => ({
    type: 'FETCH_PRESS_RELEASES_FAILURE',
    payload: err.message
})

export const fetchPressReleases = () => {
    return async dispatch => {
        try {
            let res = await axios.get(`${URL_PREFIX}/press`)
            dispatch(fetchPressReleasesSuccess(res))
        }
        catch(err) {
            dispatch(fetchPressReleasesFailure(err));
        }
    }
}