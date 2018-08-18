import React from 'react';
import { NavLink } from 'react-router-dom';
import RouterHelper from '../../utils/RouterHelper';
import Moment from "react-moment";
import {
    Row,
    Col,
    Button,
    Card,
    CardTitle,
    CardHeader,
    CardBody,
    CardFooter,
    ListGroup,
    ListGroupItem,
    Alert
} from 'reactstrap';
import ArrayHelper from '../../utils/ArrayHelper';

const styles = {
    height: "300px"
}

export default class DietDay extends React.Component {
    constructor(props) {
        super(props);
        this.routerHelper = new RouterHelper();
        this.arrayHelper = new ArrayHelper();
        this.state = {
            now: new Date()
        };
    }

    componentDidMount() {
        this.setState({
            timerId: setInterval(this.tick, 1000),
            nextMealTime: this.calculateNextMeal()
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.timerId);
    }

    tick = () => {
        let now = new Date();
        this.setState({
            now: now
        });
        if(now.getTime() > this.state.nextMealTime.getTime()){
            var nextMeal = this.calculateNextMeal(now);
            this.setState({
                nextMealTime: nextMeal
            });
        }
    }

    calculateNextMeal = (now) => {
        let nextMealsTime = this.props.day.meals.map(meal => {
            return new Date(meal.dayEatTime).getTime();
        });

        let nearestMealMiliseconds;

        if(now)
            nearestMealMiliseconds = this.arrayHelper.minThan(nextMealsTime, now);
        else    
            nearestMealMiliseconds = this.arrayHelper.minThan(nextMealsTime, this.state.now);            
        
        let nearestMealTime = new Date(nearestMealMiliseconds);

        return nearestMealTime;
    }

    getMeals = () => {
        if (this.props.day.meals)
            return <ListGroup>
                {this.props.day.meals.map((meal, index) =>
                    <ListGroupItem color="success" key={index}>{meal.name}</ListGroupItem>)}
            </ListGroup>
        else
            return <Alert>Nie masz przypisanych posilkow do dzisiejszego dnia</Alert>
    }

    render() {
        return <Card outline color="success">
            <CardHeader tag="h1">Dieta</CardHeader>
            <CardBody>
                <CardTitle>Jadlospis</CardTitle>
                <Row>
                    <Col lg="6" md="6" sm="6" xs="6">
                        <Card>
                            <CardHeader>{this.props.day.name}</CardHeader>
                            <CardBody style={styles}>
                                <Alert color="success">
                                    Czas: {this.state.now.toLocaleTimeString()}
                                </Alert>
                                <Alert color="success">
                                    Następny posilek o: <Moment format="HH:mm">{this.state.nextMealTime}</Moment>
                                </Alert>
                                <Button outline color="success" block>Zamień</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="6" md="6" sm="6" xs="6" >
                        <Card>
                            <CardHeader>Posilki</CardHeader>
                            <CardBody style={styles}>{this.getMeals()}</CardBody>
                        </Card>
                    </Col>
                </Row>
            </CardBody>
            <CardFooter>
                <NavLink to={this.routerHelper.menus()}>
                    <Button outline color="success" block>Pozostałe jadłospisy</Button>
                </NavLink>
            </CardFooter>
        </Card>
    }
}