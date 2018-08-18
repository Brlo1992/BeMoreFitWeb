import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import ApiRouterHelper from "../../utils/ApiRouterHelper";
import RouterHelper from "../../utils/RouterHelper";
import axios from "axios";

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            repeatedPassword: ''
        };
        this.apiRouterHelper = new ApiRouterHelper();
        this.routerHelper = new RouterHelper();
    };

    handleChange = (name, value) => {
        this.setState({
            [name]: value
        });
    };

    handleUsernameChange = (event) => {
        this.handleChange("username", event.target.value);
    };

    handlePasswordChange = (event) => {
        this.handleChange("password", event.target.value);
    };

    handleEmailChange = (event) => {
        this.handleChange("email", event.target.value);
    };

    handleRepeatedPasswordChange = (event) => {
        this.handleChange("repeatedPassword", event.target.value);
    };

    handleSubmit = (event) => {
        event.preventDefault();

        let requestOptions = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(this.state),
            url: this.apiRouterHelper.authRegister()
        }

        axios(requestOptions)
            .then((response) => this.handleSubmitSucceed(response.data))
            .catch((response) => this.handleSubmitError(response.data))
    }

    handleSubmitSucceed = (response) => {
        if (response.isValid)
            this.props.history.push(this.routerHelper.login());

    }

    handleSubmitError = (response) => {
        console.log(response);
        this.setState({
            password: '',
            repeatedPassword: ''
        })
    }
    render() {
        return <Container>
            <Row>
                <Col lg={12}>
                    <h1>Rejestracja</h1>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="username">Nazwa użytkownika</Label>
                            <Input type="username" name="username" id="username" value={this.state.username} onChange={this.handleUsernameChange}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" id="email" value={this.state.email} onChange={this.handleEmailChange}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Haslo</Label>
                            <Input type="password" name="password" id="password" value={this.state.password} onChange={this.handlePasswordChange}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="repeatedPassword">Powtorz haslo</Label>
                            <Input type="password" name="repeatedPassword" id="repeatedPassword" value={this.state.repeatedPassword} onChange={this.handleRepeatedPasswordChange}></Input>
                        </FormGroup>
                        <Button outline color="success" block>Zarejestruj</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    }
}