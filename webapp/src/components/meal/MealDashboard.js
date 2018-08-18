import React from 'react';
import {Alert, Container, Row, Col, Card, CardHeader, CardBody, CardFooter, CardText, ListGroup, ListGroupItem, Button} from 'reactstrap'

export default class MealDashboard extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            meal: {
                name: "posilek",
                type: "wegetariański",
                description: "to jest sposb aby przygotować ten i ten sdsadsadsadsad",
                ingredients: [
                    "skladnik 1",
                    "skladnik 2",
                    "skladnik 3",
                    "skladnik 4",
                    "skladnik 5",
                ]
            }
        }
    }
    render(){
        return <Container>
            <Row>
                <Col lg={12}>
                    <Card>
                        <CardHeader>{this.state.meal.name}</CardHeader>
                        <CardBody>
                            <Row>
                                <Col lg={6}>
                                    <CardText>
                                        <Alert color="success">
                                            <h3>Przepis</h3>
                                            <hr />
                                            {this.state.meal.description}
                                        </Alert>
                                    </CardText>
                                    <CardText>
                                        <Alert color="success">Typ: {this.state.meal.type}</Alert>
                                    </CardText>
                                </Col>
                                <Col lg={6}>
                                    <ListGroup>
                                        {this.state.meal.ingredients.map((ingredient, index) => <ListGroupItem outline color="success">
                                            <Row>
                                                <Col lg={8}>{ingredient}</Col>
                                                <Col lg={4}>
                                                    <Button outline block color="success">Zamień</Button>
                                                </Col>
                                            </Row>
                                        </ListGroupItem>)}
                                    </ListGroup>
                                </Col>
                            </Row>
                        </CardBody>
                        <CardFooter>
                            <Row>
                                <Col lg={6}></Col>
                                <Col lg={3}>
                                    <Button outline block color="success">Zastąp</Button>
                                </Col>
                                <Col lg={3}>
                                    <Button outline block color="success">Zapisz</Button>
                                </Col>
                            </Row>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
        </Container>
    }
}