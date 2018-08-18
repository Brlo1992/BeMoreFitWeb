import React from 'react'; 
import { Row, Col, Alert } from 'reactstrap';


const AccountDetails = (props) => {
    const style = { visibility: 'hidden' }
    let details;
    if (props.item.enabled) {
        details = <Col lg={4}>
            <Row>
                <Col lg={6}>
                    <Alert color="success"> Wlaczony</Alert>
                </Col>
                <Col lg={6}>
                    <Alert color="danger" style={style}> Wylaczony</Alert>
                </Col>
            </Row>
        </Col>
    }
    else {
        details = <Col lg={4}>
        <Row>
            <Col lg={6}>
                <Alert color="success" style={style}> Wlaczony</Alert>
            </Col>
            <Col lg={6}>
                <Alert color="danger"> Wylaczony</Alert>
            </Col>
        </Row>
    </Col>
    }
    return <Row key={props.index}>
        <Col lg={8}>
            <Alert color="light">
                {props.item.name}
            </Alert>
        </Col>
        {details}
    </Row>
}

export default AccountDetails