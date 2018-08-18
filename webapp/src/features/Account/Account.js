import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Container } from 'reactstrap';
import ApiRouterHelper from '../../utils/ApiRouterHelper.js';
import AccountDetails from './AccountDetails.js'

class Account extends React.Component {

    constructor(props) {
        super(props);
        this.apiRouterHelper = new ApiRouterHelper()
        this.state = {
            additionalInfo: [
                { name: "Modul diety", enabled: true },
                { name: "Modul treningu", enabled: true },
                { name: "Modul trenera", enabled: false },
                { name: "Modul dietetyka", enabled: true }
            ]
        }
    }


    render() {
        return <Container>
            <Row>
                <Col lg={12}>
                    <h4>Dane</h4>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col lg={12}>
                    <h4>Dodatkowe Informacje</h4>
                    <br />
                    {this.state.additionalInfo.map((item, index) => <AccountDetails item={item} index={index} />)}
                </Col>
            </Row>
            <hr />
        </Container>
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);