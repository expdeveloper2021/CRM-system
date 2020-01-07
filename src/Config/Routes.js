import React, { Component } from 'react'
import { Route, Router } from 'react-router-dom'
import Registration from '../Components/Registration'
import Dashboard from '../Components/Dashboard'
import Login from '../Components/Login'
import Main from '../Containers/Main'
import Upgrade from '../Components/Upgrade'

const CreateBrowserHistory = require("history").createBrowserHistory
const history = CreateBrowserHistory()

class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Route exact path="/" component={Main} />
                <Route path="/registration" component={Registration} />
                <Route path="/login" component={Login} />
                <Route path="/MemberPanel" component={Dashboard} />
                <Route path="/Upgrade" component={Upgrade} />
            </Router>
        )
    }
}

export default Routes
