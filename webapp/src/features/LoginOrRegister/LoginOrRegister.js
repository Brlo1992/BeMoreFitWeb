import React from "react";
import {NavLink} from 'react-router-dom';
import RouterHelper from '../../utils/RouterHelper.js'
import { Container, Row, Col, Card, CardText, CardTitle, Button } from 'reactstrap';


export default class LoginOrRegister extends React.Component{
    constructor(props){
        super(props);
        this.routerHelper = new RouterHelper();
    }
    getRegisterConfig = () => {
        return {
            Title:"Rejestracja",
            Description:"Konto umożliwa bla bla bla",
            Route:"register",
            RouteColor:"primary",
            RouteDisplay:"Rejestracja"
        }
    }

    getLoginConfig = () => {
        return {
            Title:"Logowanie",
            Description:"Zaloguj się używając istniejącego konta",
            Route:"login",
            RouteColor:"success",
            RouteDisplay:"Logowanie"
        }
    }

    getLayoutElement = (configuration) =>{
        return <Col lg={6}>
                    <Row>
                        <Col lg="12">
                            <Card body>
                                <CardTitle>{configuration.Title}</CardTitle>
                                <CardText>
                                    {configuration.Description}
                                </CardText>
                            </Card>
                        </Col>
                    </Row>
                    <NavLink to={this.routerHelper._setRoute(configuration.Route)}>
                        <Button 
                            outline 
                            color={configuration.RouteColor} 
                            size="lg"
                            block>{configuration.RouteDisplay}
                        </Button>
                    </NavLink>
                </Col>
    }
    render(){
        var registerConfig = this.getRegisterConfig();
        var loginConfig = this.getLoginConfig();
        return <Container>            
                        <Row>
                            {this.getLayoutElement(loginConfig)}
                            {this.getLayoutElement(registerConfig)}
                        </Row>
                </Container>
    }
}