const initialState = {
    heading: '',
    content: ''
}

const contentReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GRAB_CONTENT':
            return {
                heading: action.payload.heading,
                content: action.payload.content
            }
        default: 
            return state
    }
}

export default contentReducer;