const initialState = {
    pressReleases: []
}

const pressReleaseReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_PRESS_RELEASES':
            return {
                ...action.payload
            }
        default: 
            return state
    }
}

export default pressReleaseReducer;