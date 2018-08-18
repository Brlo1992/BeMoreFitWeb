import React from 'react';
import {TabContent, TabPane, Nav, NavItem, NavLink,Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import classnames from 'classnames';
import Day from './Day.js'

export default class DayTabs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            activeTab: 0,
            days: [
                {
                    name:"dzien 1",
                    waterDay: false,
                    meals: [
                        {
                            id: 1,
                            before: "szklanka wody",
                            name:"sniadanie",
                            ingrdients: [
                                "aaa","bbb","ccc"
                            ]
                        },
                        {
                            id: 2,
                            before: "szklanka wody z cytryną",
                            name:"drugie sniadanie",
                            ingrdients: [
                                "aaa","bbb","ccc"
                            ]
                        },
                        {
                            id: 3,
                            before: "szklanka wody z zurawiną",
                            name:"obiad",
                            ingrdients: [
                                "aaa","bbb","ccc"
                            ]
                        },
                        {
                            id: 4,
                            before: "dwie szklanki wody",
                            name:"podwieczorek",
                            ingrdients: [
                                "aaa","bbb","ccc"
                            ]
                        },
                        {
                            id: 5,
                            before: "dwie szklanki wody",
                            name:"kolacja",
                            ingrdients: [
                                "aaa","bbb","ccc"
                            ]
                        }
                    ]
                },
                {
                    name:"dzien 2",
                    waterDay: true,
                    meals: []
                }
            ]
        }
    }

    toggle = (tabId) => {
        if(this.state.activeTab !== tabId)
            this.setState({
                activeTab: tabId
            });
    }

    componentDidMount = () =>{

    }

    render(){
        return <Container>
            <Row>
                <Col lg={12}>
                    <Card>
                        <CardHeader>Nazwa jadlospisu</CardHeader>
                        <CardBody>
                            <Row>
                                <br />
                                <Col lg={12}>
                                    <Nav tabs>
                                        {this.state.days.map((day,index) =>
                                            <NavItem key={index} onClick={() => this.toggle(index)} className={classnames({active: this.state.activeTab === 0})} >
                                                <NavLink>
                                                    {day.name}
                                                </NavLink>
                                            </NavItem>)}
                                    </Nav>
                                    <TabContent activeTab={this.state.activeTab}>
                                        {this.state.days.map((day,index) =>
                                            <TabPane key={index} tabId={index}>
                                                <Row>
                                                    <Col lg={12}>
                                                        <br />
                                                        <Day meals={day.meals}/>
                                                    </Col>
                                                </Row>
                                            </TabPane>
                                        )}
                                    </TabContent>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    }
}
