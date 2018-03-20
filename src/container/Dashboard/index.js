import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getResults } from '../../redux/action'

import { Row, Col, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'

import Results from '../Results'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state= {
            sortList: [
                {
                    title: 'classic',
                },
                {
                    title: 'freshtastic',
                },
                {
                    title: 'relevant',
                }
            ],
            availabilityList: [
                {
                    title: 'for_sale',
                },
                {
                    title: 'not_for_sale',
                },
                {
                    title: 'all',
                }
            ],
            substrateList: [
                {
                    title: 'fabric'
                },
                {
                    title: 'wallpaper'
                },
                {
                    title: 'gift_wrap'
                },
                {
                    title: 'any'
                }
            ],
            viewList: [
                {
                    title: 'fabric',
                    value: 'fabric'
                },
                {
                    title: 'project',
                    value: 'project'
                },
                {
                    title: 'not set',
                    value: ''
                }
            ],
            results: [],
            params: {}
        }
    }

    componentWillReceiveProps = nextProps => {
        console.log('next props', nextProps, nextProps.results)
        this.setState({ results: nextProps.results })
        console.log('search results in dashoard =>', this.state.results)        
    }

    componentDidMount() { 
        const params = {}
        this.props.getResults(params)
        this.setState({ results: this.props.results })
    }
    

    getResults = () => {
        console.log('search props ===>', this.props)
        const params = {
            term: this.term.value,
            offset: this.offset.value,
            limit: this.limit.value,
            sort: this.sort.value,
            availability: this.availability.value,
            substrate: this.substrate.value,
            view: this.view.value
        }
        console.log('params ===>', params)        
        this.props.getResults(params)
        this.setState({results: this.props.results})
    }

    viewDesign = item => {
        this.setState({
            showViewDesign: true,
            design: item
        })
    } 


    render() {
        const { results } = this.state;
        const { sortList, availabilityList, substrateList, viewList } = this.state;

        return (
            <div className="dashboard">
                <Row className="search-bar">
                    <Col xs={12} md={3}>
                        <FormGroup>
                            <ControlLabel>search term</ControlLabel>
                            <FormControl type="text" inputRef={(ref) => this.term = ref}></FormControl>
                        </FormGroup>
                    </Col>
                    <Col xs={12} md={3}>                    
                        <FormGroup>
                            <ControlLabel>offset</ControlLabel>
                            <FormControl type="number" inputRef={(ref) => this.offset = ref}></FormControl>
                        </FormGroup>
                    </Col>
                    <Col xs={12} md={3}>                                        
                        <FormGroup>
                            <ControlLabel>limit</ControlLabel>
                            <FormControl type="number" inputRef={(ref) => this.limit = ref}></FormControl>
                        </FormGroup>
                    </Col>                    
                    <Col xs={12} md={3}>                                        
                        <FormGroup>
                            <ControlLabel>sort</ControlLabel>
                            <FormControl className="select" componentClass="select" defaultValue="classic" inputRef={(input) => { this.sort = input }}>
                                {
                                    sortList.map((item, i) =>
                                        <option value={item.title} key={i}>{item.title}</option>
                                    )
                                }
                            </FormControl>
                        </FormGroup>
                    </Col>                    
                    <Col xs={12} md={3}>                    
                        <FormGroup>
                            <ControlLabel>availability</ControlLabel>
                            <FormControl className="select" componentClass="select" defaultValue="for_sale" inputRef={(input) => { this.availability  = input }}>
                                {
                                    availabilityList.map((item, i) =>
                                        <option value={item.title} key={i}>{item.title}</option>
                                    )
                                }
                            </FormControl>
                        </FormGroup>
                    </Col>                    
                    <Col xs={12} md={3}>                    
                        <FormGroup>
                            <ControlLabel>substrate</ControlLabel>
                            <FormControl className="select" componentClass="select" defaultValue="any" inputRef={(input) => { this.substrate = input }}>
                                {
                                    substrateList.map((item, i) =>
                                        <option value={item.title} key={i}>{item.title}</option>
                                    )
                                }
                            </FormControl>
                        </FormGroup>
                    </Col>                    
                    <Col xs={12} md={3}>                    
                        <FormGroup>
                            <ControlLabel>view</ControlLabel>
                            <FormControl className="select" componentClass="select" defaultValue="" inputRef={(input) => { this.view = input }}>
                                {
                                    viewList.map((item, i) =>
                                        <option value={item.value} key={i}>{item.title}</option>
                                    )
                                }
                            </FormControl>
                        </FormGroup>
                    </Col> 
                    <Col xs={12} md={3}>                   
                        <Button className="mint-btn" onClick={() => this.getResults()}>search</Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Results results={results} />
                    </Col>
                </Row>
			</div>
        )
    }
}

const mapStateToProps = state => ({
    session: state.session,
    results: state.results    
});

export default connect(mapStateToProps, { getResults })(Dashboard)