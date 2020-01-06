import React, { Component } from 'react'
import { Route, Router } from 'react-router-dom'
import Registration from '../Components/Registration'
import Dashboard from '../Components/Dashboard'
import Login from '../Components/Login'

const CreateBrowserHistory = require("history").createBrowserHistory
const history = CreateBrowserHistory()

class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Route exact path="/" component={Dashboard} />
                <Route path="/registration" component={Registration} />
                <Route path="/login" component={Login} />
            </Router>
        )
    }
}

export default Routes
