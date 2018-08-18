import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ApiRouterHelper from '../../utils/ApiRouterHelper';
import axios from 'axios';
import { addNotify } from '../../features/notifications/notificationsActions';
import DietSelector from "./DietSelector";
import DietDay from './DietDay';
import { Container } from 'reactstrap';
import DietCreator from './DietCreator';

class Diet extends React.Component {
    constructor(props) {
        super(props);
        this.apiRouterHelper = new ApiRouterHelper();
        this.state = {
            hasDay: true,
            hasAnyMenus: false
        }
    }

    componentDidMount() {
        const { token } = this.props;
        let requestOptions = {
            method: "GET",
            headers: { Authorization: "Bearer ".concat(token) },
            url: this.apiRouterHelper.dietIndex()
        }
        axios(requestOptions)
            .then(response => this.dietIndexSucceed(response.data))
            .catch(response => this.dietIndexError(response.data));
    }

    showNotify = (message) => {
        const { addNotify } = this.props.actions;
        addNotify({ text: message });
    }

    dietIndexError = (response) => {
        this.setState({ hasDay: false, hasAnyMenus: false });
        this.showNotify("Wystąpil blad podczas pobierania danych");
    }

    dietIndexSucceed = (response) => {
        if (response.isValid)
            if (response.data.currentDietDay)
                this.setState({
                    currentDay: response.data.currentDietDay,
                    hasDay: true,
                    hasAnyMenus: response.data.hasAnyMenus
                });
            else
                this.setState({ hasDay: false, hasAnyMenus: false });
        else {
            this.setState({ hasDay: false, hasAnyMenus: false});
            for (const message in response.Messages)
                if (message.messageType === 500)
                    this.showNotify(message);
        }
    }

    getElement = () => {
        if (this.state.hasDay && this.state.hasAnyMenus)
            return <DietDay day={this.state.currentDay} />
        else if (this.state.hasAnyMenus && !this.state.hasDay)
            return <DietSelector />
        else if (!this.state.hasAnyMenus && !this.state.hasDay)
            return <DietCreator />
        else
            return <div></div>
    }

    render() {
        return <Container>
            {this.getElement()}
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
        actions: bindActionCreators({ addNotify }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Diet);