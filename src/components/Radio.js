import React, { Component } from 'react';
import { Container, Row, Col, ListGroup } from 'reactstrap';

import StationList from './StationList';
import './Radio.css';

class Radio extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stationList: [],
            stationName: '',
            stationDescription: ''
        }
    }

    componentDidMount() {
        fetch('http://api.dirble.com/v2/countries/UA/stations?token=f17abdbf40b809626afb380ec9')
            .then(req => req.json())
            .then(res => {
                this.setState({stationList: res});
                console.log(this.state.stationList);
            })
            
    }

    render() {
        const {stationList} = this.state;
        const List = stationList.map( (item) => {
            return <StationList name={item.name} img={item.image.url} key={item.id} index={item.id}/> 
        })

        return (
            <Container className="container">
                <Row>
                    <Col sm="6">
                        <div className="control">
                            <h2>{this.state.stationName}</h2>
                            <p>{this.state.stationDescription}</p>
                        </div>
                    </Col>
                    <Col sm="6">
                        <div className="stationList">
                            <ListGroup>{List}</ListGroup>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Radio;