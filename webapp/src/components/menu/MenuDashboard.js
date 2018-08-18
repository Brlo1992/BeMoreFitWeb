import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import DayTabs from './DayTabs'
export default class MenuDashboard extends React.Component{
    render(){
        return <Container>
            <Row>
                <Col lg={12}><DayTabs id={this.props.match.params.id}/></Col>
            </Row>
        </Container>
    }
}