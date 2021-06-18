const initialState = {
    loading: false,
    success: false,
    mailingList: [],
    error: ''
};

const mailingListReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_MAILING_LIST':
            return {
                loading: true,
                success: false,
                mailingList: [],
                error: ''
            }
        case 'FETCH_MAILING_LIST_SUCCESS':
            return {
                loading: false,
                success: true,
                mailingList: action.payload.mailingList,
                error: ''
            }
        case 'FETCH_MAILING_LIST_FAILURE':
            return {
                loading: false,
                success: false,
                mailingList: [],
                error: action.payload
            }
        default: 
            return state
    }
}

export default mailingListReducer;