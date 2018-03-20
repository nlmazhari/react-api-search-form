const initialState = {
    loggedIn: false,
    user: {
        path: '/',
    },
    userId: undefined,
    sessionId: undefined,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'REQUESTED_LOGIN_SUCCEEDED':
            console.log("Logged In")
            return {
                loggedIn: true,
                user: action.user,
            }
        case 'REQUESTED_INSTA_LOGIN_REJECTED':
            return {
                loggedIn: false,
                msg: action.message
            }
        case 'REQUEST_LOGOUT':
            console.log("Logged Out")
            return {
                loggedIn: false,
                user: {},
                data: {}
            }
        case 'REQUEST_UPDATE':
            console.log(action)
            return {
                loggedIn: true,
                user: action.user
            }
    }
    return state
}
