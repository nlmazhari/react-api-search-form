import React from 'react'
import {
    Row, Col, 
    Modal,
    Button
} from 'react-bootstrap'

export default class ViewDetails extends React.Component {

    render() {
        console.log('####', this.props);
        return (
            <Modal show={this.props.show} onHide={this.props.close} bsSize="lg" className="show-details">
                <Modal.Header closeButton>
                    <Modal.Title>deisign information:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                                   
                    <ul className="info">
                        <li className="info--wrap">
                            <div className="info--thumb" style={{ backgroundImage: `url( ${this.props.item.thumbnail_url} )` }}></div>
                            <div className="info--desc">
                                <div className="info--item">
                                    <p className="info--title">name:</p>
                                    <p className="text">{this.props.item.name}</p>
                                </div>
                                <div className="info--item">
                                    <p className="info--title">description:</p>
                                    <p className="text">{this.props.item.short_description}</p>
                                </div>
                                <Row className="info--sale">
                                    <Col xs={12} md={6}>
                                        <p className="info--title">for sale:</p>
                                        <p className="text">{this.props.item.for_sale ? 'yes' : 'no'}</p>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <p className="info--title">for sale as fabric:</p>
                                        <p className="text">{this.props.item.for_sale_as_fabric ? 'yes' : 'no'}</p>
                                    </Col>
                                </Row>
                                <Row className="info--sale">
                                    <Col xs={12} md={6}>
                                        <p className="info--title">for sale as gift wrap:</p>
                                        <p className="text">{this.props.item.for_sale_as_gift_wrap ? 'yes' : 'no'}</p>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <p className="info--title">for sale as wallpaper:</p>
                                        <p className="text">{this.props.item.for_sale_as_wallpaper ? 'yes' : 'no'}</p>
                                    </Col>
                                </Row>
                                <div className="info--item">
                                    <p className="info--title">tags:</p>
                                    <div className="info--tags-wrap">
                                        {
                                            this.props.item.tags ? 
                                            this.props.item.tags.map((item, i) =>
                                                <div key={i} className="info--tag">
                                                            {item}
                                                </div>
                                            )
                                            : ''
                                        }
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    {
                        this.props.item.fabric_image_url ?
                            <div>
                                <p className="info--title">fabric image:</p>                        
                                <div className="big-img" style={{ backgroundImage: `url( ${this.props.item.fabric_image_url} )` }}></div>
                            </div>
                            : ''
                    }
                    {
                        this.props.item.project_image_url ?
                            <div>
                                <p className="info--title">project image:</p>
                                <div className="big-img" style={{ backgroundImage: `url( ${this.props.item.project_image_url} )` }}></div>
                            </div>
                            : ''
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button className="orange-btn" onClick={() => this.props.close()}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}