import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Radio.css';

class Radio extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stationList: [{name: 'FM Radio', description: 'shape of you'}],
            stationName: 'FM Radio',
            stationDescription: 'shape of you'
        }
    }

    render() {
        return (
            <Container className="container">
                <Row>
                    <Col sm="6">
                        <div className="control">
                            {this.renderStationName()}
                        </div>
                    </Col>
                    <Col sm="6">
                        <div className="stationList">

                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }

    renderStationName() {
        if(this.state.stationList.length === 0) {
            return (
                <h2>Select Station</h2>
            )
        } else {
            return (
                <div>
                    <h2>{this.state.stationName}</h2>
                    <p>{this.state.stationDescription}</p>
                </div>
            ) 
        }
    }
}

export default Radio;