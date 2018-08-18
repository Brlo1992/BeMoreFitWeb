import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { login } from './LoginActions.js';
import { NavLink } from 'react-router-dom';
import RouterHelper from '../../utils/RouterHelper.js';
import axios from 'axios';
import ApiRouterHelper from '../../utils/ApiRouterHelper.js';
import CookieHelper from '../../utils/CookieHelper.js';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            rememberMe: false
        }
        this.routerHelper = new RouterHelper();
        this.apiRouterHelper = new ApiRouterHelper();
    }

    componentDidMount() {
        if (CookieHelper.checkCookieExist("username"))
            this.setState({ username: CookieHelper.getCookie("username") })
        if (CookieHelper.checkCookieExist("password"))
            this.setState({ password: CookieHelper.getCookie("password") })
    }

    handleChange = (name, value) => {
        this.setState({
            [name]: value
        });
    }

    handleRememberMeChange = (event) => {
        this.setState((prevState) => {
            return { rememberMe: !prevState.rememberMe }
        });
    }

    handleUsernameChange = (event) => {
        this.handleChange('username', event.target.value);
    }

    handlePasswordChange = (event) => {
        this.handleChange('password', event.target.value);
    }

    saveCookies = () => {
        if (this.state.rememberMe) {
            CookieHelper.saveCookie("username", this.state.username);
            CookieHelper.saveCookie("password", this.state.password);
        }
    }

    loginSuccess = (response) => {
        let { login } = this.props;
        if (response !== undefined)
            if (response.data.isValid) {
                login(response.data.data.token);
                this.saveCookies();
                this.props.history.push(this.routerHelper.home());
            }
            else {
                console.log("Invalid data");
            }
    }

    loginError = (response) => {
        console.log(response);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post(this.apiRouterHelper.authLogin(), {
            username: this.state.username,
            password: this.state.password,
            remeberMe: this.state.rememberMe
        })
            .then((response) => this.loginSuccess(response))
            .catch((response) => this.loginError(response))
    }

    render() {
        return <Container>
            <Row>
                <Col lg={12}>
                    <h1>Zaloguj</h1>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="username">Nazwa użytkownika</Label>
                            <Input type="username" name="username" id="username" value={this.state.username} onChange={this.handleUsernameChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Haslo</Label>
                            <Input type="password" name="password" id="password" value={this.state.password} onChange={this.handlePasswordChange} />
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="rememberMe" id="rememberMe" value={this.state.rememberMe} onChange={this.handleRememberMeChange} />{' '}
                                Zapamiętaj mnie
                            </Label>
                        </FormGroup>
                        <Button outline block color="primary">Zaloguj</Button>
                    </Form>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col lg={12}>
                    <h2>Zaloguj za pomocą</h2>
                    <Row>
                        <Col lg={4}>
                            <NavLink to={this.routerHelper.facebook()}>
                                <Button outline block color="primary">Facebook</Button>
                            </NavLink>
                        </Col>
                        <Col lg={4}>
                            <NavLink to={this.routerHelper.twitter()}>
                                <Button outline block color="primary">Twitter</Button>
                            </NavLink>
                        </Col>
                        <Col lg={4}>
                            <NavLink to={this.routerHelper.google()}>
                                <Button outline block color="danger">Google</Button>
                            </NavLink>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col lg={12}>
                    <h2>Nie masz konta? Zarejestruj się</h2>
                    <NavLink to={this.routerHelper.register()}>
                        <Button outline block color="success">Zarejestruj</Button>
                    </NavLink>
                </Col>
            </Row>
        </Container>
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.authState.token,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        login: (token) => dispatch(login(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);