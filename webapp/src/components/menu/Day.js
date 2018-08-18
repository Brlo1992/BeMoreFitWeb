import React from 'react';
import { ListGroup, ListGroupItem, Row, Col } from 'reactstrap';
import RouterHelper from '../../utils/RouterHelper.js'
import { NavLink } from 'react-router-dom';

export default class Day extends React.Component {
    constructor(props) {
        super(props);
        this.routerHelper = new RouterHelper();
    }
    render() {
        return <ListGroup>
            {this.props.meals.map((meal, index) => <ListGroupItem key={index}>
                <Row>
                    <Col lg={8}>{meal.name}</Col>
                    <Col lg={2}>
                        <NavLink to={this.routerHelper._setRoute(`meal/${meal.id}`)}>
                            Podgląd
                        </NavLink>
                    </Col>
                    <Col lg={2}>
                        <NavLink to={this.routerHelper._setRoute(`meal/edit/${meal.id}`)}>
                            Usuń
                        </NavLink>
                    </Col>
                </Row>
            </ListGroupItem>)}
        </ListGroup>
    }
}