import React from 'react';
import { Card, CardBody, CardHeader, Row, Col, Input, Form, FormGroup, Label, Button, Alert } from 'reactstrap';
import DietNewDay from './DietNewDay';
import axios from "axios";
import MealTypeHelper from "../../utils/MealTypeHelper";
import { setMealByType } from "./DietActions";
import { connect } from 'react-redux';
import ApiRouterHelper from '../../utils/ApiRouterHelper';

class DietCreator extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            newMenuDays: [
                { name: "Testowy" },
                { name: "Testowy2" }
            ],
            daysLeft: 14
        }
        this.apiRouterHelper = new ApiRouterHelper();
    }

    componentDidMount() {
        this.getMealsByType(MealTypeHelper.small);
        this.getMealsByType(MealTypeHelper.breakfast);
        this.getMealsByType(MealTypeHelper.dinner);
        this.getMealsByType(MealTypeHelper.supper);
    }

    getMealsByType = (mealType) => {
        const { token } = this.props;
        let requestOptions = {
            method: "GET",
            headers: {
                Authorization: "Bearer ".concat(token),
                MealTypeViewModel: mealType
            },
            url: this.apiRouterHelper.dietMeals()
        }

        axios(requestOptions)
            .then(response => this.dietMealsSucceed(response.data, mealType))
            .catch(response => this.dietMealsError(response.data))
    }


    dietMealsSucceed = (response, mealType) => {
        let { setMealByType } = this.props;
        if (response.isValid)
            setMealByType(mealType, response.data.possibleMeals)
        else
            for (const message in response.Messsages)
                console.log(message.messageText);
    }

    dietMealsError = (response) => {
        console.log(response);
    }


    handleChange = (name, value) => {
        this.setState({
            [name]: value
        });
    };

    handleNameChange = (event) => {
        this.handleChange("newMenuName", event.target.value);
    };


    handleAddDay = (event) => {
        let daysLeftState = this.state.daysLeft - 1;
        if (this.state.daysLeft !== 0) {
            let arrayState = [...this.state.newMenuDays, { name: "Testowy" + this.state.daysLeft }]
            this.setState({
                newMenuDays: arrayState,
                daysLeft: daysLeftState
            })
        }
        if (this.state.daysLeft === 1)
            event.target.disabled = "disabled";
    }

    render() {
        return <div>
            <Row>
                <Col lg={12}>
                    <Card outline color="success">
                        <CardHeader tag="h1">Utwórz dietę</CardHeader>
                        <CardBody>
                            <Row>
                                <Col lg={12}>
                                    <h2>Dodaj nowy jadlospis</h2>
                                    <Form>
                                        <FormGroup>
                                            <Label for="newMenuName">Nazwa</Label>
                                            <Input type="text" name="newMenuName" id="newMenuName" />
                                        </FormGroup>
                                    </Form>
                                </Col>
                                <Col lg={3}>
                                    <Button outline block color="primary" onClick={this.handleAddDay}>Dodaj dzień</Button>
                                </Col>
                                <Col lg={8}>
                                    <Alert>Pozostalo dni do dodania: {this.state.daysLeft} </Alert>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <br />
            <Row>
                <Col lg={12}>
                    {this.state.newMenuDays.map((item, index) => <div>
                        <DietNewDay item={item} key={index} dayNumber={index + 1} /><br />
                    </div>)}
                </Col>
            </Row>
            <hr />
            <Row>
                <Col lg={12}>
                    <h2>Dodaj jadlospis z pliku</h2>
                    <br />
                    <Form>
                        <Row>
                            <Col lg={6}><Input type="file" name="menuFile" id="menuFile" block /></Col>
                            <Col lg={6}><Button block outline color="success" /></Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
            <br />
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.authState.token,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setMealByType: () => dispatch(setMealByType())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DietCreator);