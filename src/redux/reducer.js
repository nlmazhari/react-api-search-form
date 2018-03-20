import { combineReducers } from 'redux'

import session from './sessionReducer'
import results from './resultsReducer'

export default combineReducers({
    session,
    results
})