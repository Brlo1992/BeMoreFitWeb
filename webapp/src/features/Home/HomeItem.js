import React from "react";
import { Col, Card, CardTitle, CardText, Button } from "reactstrap";
import RouterHelper from '../../utils/RouterHelper.js'
import { NavLink } from 'react-router-dom';

const styles = {
    marginTop: '5px',
    marginBottom: '5px',
}

export default class HomeItem extends React.Component {
    constructor(props) {
        super(props);
        this.routerHelper = new RouterHelper();
    }
    render() {
        return <Col lg={6} style={styles}>
            <Card body>
                <CardTitle>{this.props.title}</CardTitle>
                <CardText>{this.props.description}</CardText>
                <NavLink to={this.routerHelper._setRoute(this.props.id)}>
                    <Button outline color="primary" size="lg" block>{this.props.title}</Button>
                </NavLink>
            </Card>
        </Col>
    };
}