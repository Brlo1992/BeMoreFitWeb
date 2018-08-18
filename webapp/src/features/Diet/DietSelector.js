import React from 'react';
import { Card, CardHeader, CardBody, Form, FormGroup, Input } from 'reactstrap';
export default class DietSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            availableMenus: [
                {id: 1, name:"test 1"},
                {id: 2, name:"test 2"},
                {id: 3, name:"test 3"},
                {id: 4, name:"test 4"},
            ]
        }
    }
    
    getAvailableMenus = () => {
        return <Input type="select" name="dietSelector" id="dietSelector">
            {this.state.availableMenus.map((item, index) => <option id={item.id} key={index}>{item.name}</option>)}
        </Input>
    }

    render() {
        return <Card outline color="success">
            <CardHeader tag="h1">Wybór diety</CardHeader>
            <CardBody>
                <Form>
                    <FormGroup>
                        {this.getAvailableMenus()}
                    </FormGroup>
                </Form>
            </CardBody>
        </Card>
    }
}