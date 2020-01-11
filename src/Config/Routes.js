import React, { Component } from 'react'
import { Route, Router } from 'react-router-dom'
import Registration from '../Components/Registration'
import Dashboard from '../Components/Dashboard'
import Login from '../Components/Login'
import Main from '../Containers/Main'
import Upgrade from '../Components/Upgrade'
import AdminDashboard from '../Components/Admin/Dashboard'
import PlanDetails from '../Components/Admin/Plan Info'
import Account from '../Components/Account'
import Activation from '../Components/Admin/Activation'

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
                <Route path="/MyAccount" component={Account} />
                {/* Admin Pages */}
                <Route path="/AdminPanel" component={AdminDashboard} />
                <Route path="/PlanInfo" component={PlanDetails} />
                <Route path="/Activation" component={Activation} />
            </Router>
        )
    }
}

export default Routes
