const initialState = []

export default (state = initialState, action) => {
    console.log('result reducer state', state);
    console.log('result reducer action', action);

    switch (action.type) {
        case 'GET_RESULTS_LIST':
            state = action.result_list
            return state
    }

    return state
}
