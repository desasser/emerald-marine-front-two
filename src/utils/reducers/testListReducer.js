const initialState = {
    testList: []
};

const testListReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_TEST_LIST':
            return {
                ...action.payload
            }
        default: 
            return state
    }
}

export default testListReducer;