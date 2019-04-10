import React, {Component,} from 'react'
import { ListGroupItem, Row, Col} from 'reactstrap';
import './StationList.css'

class StationList extends Component {

    render() {
        return (
            <ListGroupItem>
                <Row>
                    <Col sm="2" md="2" xs="2"><img src={this.props.img} alt="station logo" /></Col>
                    <Col sm="10" md="10" xs="10"><span>{this.props.name}</span> </Col>
                </Row>
            </ListGroupItem>
        )
    }
}

export default StationList;