import query, { serverUrl } from '../common/Query'
import axios from 'axios'
// import AlertContainer from 'react-alert'

export const handleLogin = (email, password) => dispatch => {
    const reqData = {
        email,
        password,
    };
    console.log(reqData)
    query('/api/users/login', reqData)
        .then(res => {
            console.log(res)
            if (res.data.authenticated) {
                dispatch({ type: 'REQUESTED_LOGIN_SUCCEEDED', user: res.data });
                window.location.pathname = '/home/bucket'
            }
            else {
                alert('Your email or password is incorrect')
            }
        })
        .catch(error => {
            dispatch({ type: 'REQUESTED_LOGIN_REJECTED', message: "Invalid username or password." })
        })
}

export const handleLogout = () => dispatch => {
    dispatch({ type: 'REQUEST_LOGOUT' });
    localStorage['loggedIn'] = false
    window.location.pathname = '/'
}

export const handleUpdate = user => dispatch => {
    dispatch({ type: 'REQUEST_UPDATE', user })
}

export const getRooms = () => dispatch => {
    axios.get(serverUrl + '/api/v1/admin/room')
        .then(resp => {
            console.log('amoooooooooo ', resp)
            const { room_list } = resp.data.data

            console.log('hajiiiiiiii', room_list);
            dispatch({ type: 'GET_ROOMS_LIST', room_list })
        })
}

export const getSingleRoom = (room_id) => {
    const reqData = {
        room_id
    }
    axios.post(serverUrl + '/api/v1/admin/room/details', reqData)
        .then(res => {
            console.log('room res in actionjs:', res)
            this.setState({ question: res.data.data.room.questions, roomInfo: res.data.data.room }, () => {
                // console.log("question info:", this.state.question, "rooooom info", this.state.roomInfo)
            })
        })
        .catch(err => {
            console.log(err)
        })
}


export const getQuestions = () => dispatch => {
    axios.get(serverUrl + '/api/v1/admin/question')
        .then(resp => {
            console.log('get question resp in redux:', resp)
            const { questions_list } = resp.data.data
            console.log('question list in redux:', questions_list);
            dispatch({ type: 'GET_QUESTIONS_LIST', questions_list })
        })
}

export const deleteQuestion = (question_id) => dispatch => {
        const confirmation = confirm('Are you sure?')
        if (confirmation) {
            const reqData = {
                question_id
            }
            console.log(reqData)
            return axios.post(`${serverUrl}/api/v1/admin/question/deleteById`, reqData)
                .then(resp => {
                    return resp
                })
                .catch(err => {
                    console.log(err)
                })
        }
}

// export const AlertContainer = (msg, type) => {
//     return <AlertContainer me ref={a => this.msg = a} position="top right" theme='light' />
// }

export const getResults = (params) => dispatch => {
    // console.log('params =>', params)
    const request = {}
    const headers = {
        'X-Auth-Token': '2m7srmasyo4rvbav4hp7aowarahgb3qrw3i50pesgbgo2b81ih',
    }
    axios.get('http://search.spoonflower.com/searchv2/designs', {
        params
    })
        .then(resp => {
            console.log('result resp', resp);
            const result_list = resp.data.results;
            var res_list = resp.data.results;
            console.log('res_list const =>', result_list);
            dispatch({ type: 'GET_RESULTS_LIST', result_list });
        })
}