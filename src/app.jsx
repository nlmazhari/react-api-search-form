import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom'

import Home from './container/Home'
import Dashboard from './container/Dashboard'
import Results from './container/Results'

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Dashboard} />
				<Route path="/home" render={() => (
					<Home>
						<Route path="/home/results" component={Results} />
					</Home>
				)} />
			</Switch>
		</Router>
	)
}

export default App
