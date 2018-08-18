import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App.js';
import Register from './features/Register/Register.js';
import Login from './features/Login/Login.js';
import Account from './features/Account/Account.js';
import Diet from './features/Diet/Diet.js';
// import DietMenuList from './components/diet/DietMenuList.js';
// import MenuDashboard from './components/menu/MenuDashboard.js';
// import MealDashboard from './components/meal/MealDashboard.js';
// import ErrorDashboard from './components/error/ErrorDashboard.js';
import { Provider } from 'react-redux';
import Layout from './Layout.js';

const Root = ({ store }) => {
    return <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Layout exact path="/" component={App} />
                <Layout path="/account" component={Account} />
                <Layout path="/diet" component={Diet} />
                {/* <Layout path="/menus" component={DietMenuList} />
                <Layout path="/menu/:id" component={MenuDashboard} />
                <Layout path="/meal/:mealId" component={MealDashboard} />
                <Layout path="/error" component={ErrorDashboard} /> */}
            </Switch>
        </Router>
    </Provider >
}

export default Root;