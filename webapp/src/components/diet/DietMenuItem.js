import React from 'react'
import RouterHelper from '../../utils/RouterHelper.js'
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';

const DietMenuItem = (props) => {
    this.routerHelper = new RouterHelper();
    return <NavLink to={this.routerHelper._setRoute(`menu/${props.id}`)}>
        <Button outline color="success" block>{props.name}</Button>
    </NavLink>
}

export default DietMenuItem;