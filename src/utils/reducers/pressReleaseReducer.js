const initialState = {
    loading: false,
    success: false,
    pressReleases: [],
    error: ''
}

const pressReleaseReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_PRESS_RELEASES':
            return {
                loading: true,
                success: false,
                pressReleases: [],
                error: ''
            }
        case 'FETCH_PRESS_RELEASES_SUCCESS':
            return {
                loading: false,
                success: true,
                pressReleases: action.payload.pressReleases,
                error: ''
            }
        case 'FETCH_PRESS_RELEASES_FAILURE':
            return {
                loading: false,
                success: false,
                pressReleases: [],
                error: action.payload
            }
        default: 
            return state
    }
}

export default pressReleaseReducer;