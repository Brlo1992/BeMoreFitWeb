import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import DietMenuItem from './DietMenuItem.js'

export default class DietMenuList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            menus: [
                {
                    id:1,
                    name: "jadlospis 1",
                },
                {
                    id:2,
                    name: "jadlospis 2",
                },
                {
                    id:101,
                    name: "wlasny",
                }
            ]
        }
    }
    render(){
        return <Container>
            <Row>
                <Col lg={12}>
                    {this.state.menus.map((item, index) => <DietMenuItem key={index} name={item.name} id={item.id} />)}
                </Col>
            </Row>
        </Container>
    }
}