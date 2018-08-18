import React from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'reactstrap';
import HomeItem from './HomeItem.js';
import axios from "axios";
import ApiRouterHelper from '../../utils/ApiRouterHelper.js'
import { setAccess } from './HomeActions';
import ArrayHelper from '../../utils/ArrayHelper.js';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.arrayHelper = new ArrayHelper();
        this.apiRouterHelper = new ApiRouterHelper();
    }

    getElement = () => {
        const { items } = this.props;
        return <Row>{items.map((item, index) => {
            if (item.enabled) {
                return <HomeItem
                    key={index}
                    title={item.title}
                    id={item.id}
                    description={item.description}
                />
            }
            return <div></div>
        }
        )}</Row>
    }

    componentDidMount() {
        let { token } = this.props;
        let requestOptions = {
            method: "GET",
            headers: { Authorization: "Bearer ".concat(token) },
            url: this.apiRouterHelper.homeIndex()
        }

        axios(requestOptions)
            .then(response => this.homeIndexSucceed(response))
            .catch(response => this.homeIndexError(response))
    }

    homeIndexSucceed = (response) => {
        let { items, setAccess } = this.props;
        if (response.data.isValid) {
            if (response.data.data.dietEnabled)
                this.arrayHelper.first(items.filter(x => x.id === "diet")).enabled = true;
            if (response.data.data.trainingEnabled)
                this.arrayHelper.first(items.filter(x => x.id === "training")).enabled = true;
            if (response.data.data.dietecianEnabled)
                this.arrayHelper.first(items.filter(x => x.id === "dietecian")).enabled = true;
            if (response.data.data.coachEnabled)
                this.arrayHelper.first(items.filter(x => x.id === "coach")).enabled = true;

            setAccess(items);
        }
        else {
            console.log("Request result is invalid")
        }
    }

    homeIndexError = (error) => {
        console.log("Error during request");
        console.log(error);
    }

    render() {
        return <Container>
            {this.getElement()}
        </Container>
    };
}


const mapStateToProps = (state) => {
    return {
        token: state.authState.token,
        items: state.startState.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setAccess: (changedItems) => dispatch(setAccess(changedItems))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);