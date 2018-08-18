import React from 'react';
import { Card, CardBody, CardHeader, Input, Form, FormGroup, Label, Button } from 'reactstrap';
import MealSelector from "./MealSelector";

export default class DietNewDay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            meals: [
                { name: "Sniadanie", type: "breakfast" },
                { name: "Drugie Sniadanie", type: "small" },
                { name: "Obiad", type: "dinner" },
                { name: "Podwieczorek", type: "small" },
                { name: "Kolacja", type: "supper" },
            ],
        }
    }


    render() {
        return <Card>
            <CardHeader tag="h3">{"Dzien " + this.props.dayNumber}</CardHeader>
            <CardBody>
                <Form>
                    <FormGroup>
                        <Label for="newDayName">Nazwa wlasna</Label>
                        <Input type="text" name="newDayName" id="newDayName" />
                    </FormGroup>
                    {this.state.meals.map((item, index) => <MealSelector name={item.name} type={item.type} />)}
                    <Button outline color="success" block>Zapisz</Button>
                </Form>
            </CardBody>
        </Card>
    }
}