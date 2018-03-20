import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {

	componentWillMount(){
		console.log('this.props')
	}

	render() {
		return (
			<div className="mainbar">
				{this.props.children}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	session: state.session
});

export default connect(mapStateToProps)(Home)
