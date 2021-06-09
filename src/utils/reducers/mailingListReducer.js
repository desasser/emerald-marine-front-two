const initialState = {
    mailingList: []
};

const mailingListReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_MAILING_LIST':
            return {
                ...action.payload
            }
        default: 
            return state
    }
}

export default mailingListReducer;