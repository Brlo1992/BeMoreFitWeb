import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import MealTypeHelper from "../../utils/MealTypeHelper";
import { connect } from 'react-redux';

class MealSelector extends React.Component {

    getPossibleMeals = () => {
        let { smallMeals, breakfastMeals, dinnerMeals, supperMeals } = this.props;

        if (MealTypeHelper.small === this.props.type)
            return smallMeals
        else if (MealTypeHelper.breakfast === this.props.type)
            return breakfastMeals
        else if (MealTypeHelper.dinner === this.props.type)
            return dinnerMeals
        else if (MealTypeHelper.small === this.props.type)
            return supperMeals
        else 
            return [];
    }

    render() {
        return <FormGroup>
            <Label for="exampleSelect">{this.props.name}</Label>
            <Input type="select" name="select" id="exampleSelect">
                {this.getPossibleMeals().map(item => <option>{item}</option>)}
            </Input>
        </FormGroup>
    }
}

const mapStateToProps = (state) => {
    return {
        smallMeals: state.dietState.smallMeals,
        breakfastMeals: state.dietState.breakfastMeals,
        dinnerMeals: state.dietState.dinnerMeals,
        supperMeals: state.dietState.supperMeals
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MealSelector);