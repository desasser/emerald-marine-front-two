const initialState = {
    loading: false,
    success: false,
    testList: [],
    error: ''
};

const testListReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_TEST_LIST':
            return {
                loading: true,
                success: false,
                testList: [],
                error: ''
            }
        case 'FETCH_TEST_LIST_SUCCESS':
            return {
                loading: false,
                success: true,
                testList: action.payload,
                error: ''
            }
        case 'FETCH_TEST_LIST_FAILURE':
            return {
                loading: false,
                success: false,
                testList: [],
                error: action.payload
            }
        default: 
            return state
    }
}

export default testListReducer;