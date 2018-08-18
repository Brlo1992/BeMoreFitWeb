import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink as UiNavLink, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { logout } from '../features/Login/LoginActions.js';
import RouterHelper from '../utils/RouterHelper.js';
import { connect } from 'react-redux';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import ApiRouterHelper from '../utils/ApiRouterHelper';
import { addNotify } from '../features/notifications/notificationsActions.js';


const styles = {
    backgroundColor: "#d4edda",
    marginBottom: "50px"
};

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.routerHelper = new RouterHelper();
        this.apiRouterHelper = new ApiRouterHelper();
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    removeToken = () => {
        const { logout } = this.props.actions;
        logout();
    }

    showNotify = (message) => {
        const { addNotify } = this.props.actions;
        addNotify({ text: message });
    }

    handleLogout = () => {
        axios.get(this.apiRouterHelper.authLogout())
            .then(response => {
                if (response.data.isValid)
                    this.removeToken();
                else
                    this.showNotify("Nie udalo sie wylogowac");
            })
            .catch(response => this.showNotify("Wystapil blad podczas wylogowania"));
    }

    render() {
        return <Navbar style={styles} light expand="md">
            <NavbarBrand href="/">
                <h1>Be More Fit!</h1>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <UiNavLink>
                            <NavLink className="btn btn-outline-warning btn-block" to={this.routerHelper.ingredientLists()}>Listy produktow</NavLink>
                        </UiNavLink>
                    </NavItem>
                    <NavItem>
                        <UiNavLink>
                            <NavLink className="btn btn-outline-danger btn-block" to={this.routerHelper.account()}>Konto</NavLink>
                        </UiNavLink>
                    </NavItem>
                    <NavItem>
                        <UiNavLink>
                            <Button color="success" outline block onClick={this.handleLogout}>Wyloguj</Button>
                        </UiNavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    }
}

const mapStateToProps = (state) => {
    return {}
}


const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
        actions: bindActionCreators({ addNotify, logout }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);