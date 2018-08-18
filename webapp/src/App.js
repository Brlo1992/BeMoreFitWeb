import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Home from './features/Home/Home.js';
import RouterHelper from './utils/RouterHelper.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.routerHelper = new RouterHelper();
    }

    getElement = () => {
        if (this.notAuthenticated())
            this.redirectToLogin();
        else
            return <Home />
    }

    notAuthenticated = () => {
        const { token } = this.props;
        return token === undefined ? true : false;
    }

    redirectToLogin = () => {
        this.props.history.push(this.routerHelper.login());
    }

    render() {
        return <div className="App">
            {this.getElement()}
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.authState.token,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);