const initialState = []

export default (state = initialState, action) => {
    console.log(state);
    console.log(action);

    switch (action.type) {
        case 'GET_QUESTIONS_LIST':
            state = action.questions_list
            return state
    }

    return state
}
