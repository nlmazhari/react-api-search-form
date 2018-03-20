import React, { Component } from 'react'
import query from '../../common/Query'
import { connect } from 'react-redux'
import  { Button } from 'react-bootstrap'
import { getResults } from '../../redux/action'
import ViewDetails from './showDetails'

class Results extends Component {
    state= {
        showViewDetails: false,
        item: []
    }

    showDetails = item => {
        this.setState({
            showViewDetails: true,
            item: item
        })
    }

    close = () => {
        this.setState({showViewDetails: false})
    }

    render() {
        const { showViewDetails, item } = this.state
        return (
            <div>
                <div className="results">
                    {
                        this.props.results.map((item, i) => {
                            return (
                                <Button key={i} className="res--btn" onClick={() => this.showDetails(item)}>
                                    <div className="img" style={{ backgroundImage: `url( ${item.thumbnail_url} )` }}></div>
                                    <div className="info">
                                        <p className="res--name">{item.name}</p>
                                    </div>
                                </Button>
                            )
                        })
                    }
                </div>
                <ViewDetails item={item} show={showViewDetails} close={this.close} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    session: state.session,
    results: state.results
});

export default connect(mapStateToProps, { getResults })(Results)