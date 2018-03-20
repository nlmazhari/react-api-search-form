const initialState = []

export default (state = initialState, action) => {
    console.log(state);
    console.log(action);

    switch (action.type) {
        case 'GET_ROOMS_LIST':
            state = action.room_list
            return state
    }

    return state
}
