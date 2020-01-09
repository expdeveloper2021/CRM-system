import React, { Component } from 'react'
import './index.css'
import Sidebar from '../../Containers/Sidebar'
import DashboardIcon from '@material-ui/icons/Dashboard';

export class Dashboard extends Component {
    render() {
        return (
            <div>
                <Sidebar>
                    <div className="informative-content">
                        <DashboardIcon style={{ fill: "black" }} />
                        <span style={{ marginLeft: 10 }}>Dashboard</span>
                    </div>
                    <div className="main-content-dashboard">
                        <div className="upper-portion-dashboard">
                            <div className="informative-dashboard">
                                <p>ID Verification</p>
                                <p>Pending / Approved</p>
                            </div>
                            <div className="informative-dashboard">
                                <p>0.00</p>
                                <p>ROI Income</p>
                            </div>
                            <div className="informative-dashboard">
                                <p>0.00</p>
                                <p>Binary Income</p>
                            </div>
                            <div className="informative-dashboard">
                                <p>0.00</p>
                                <p>Direct Income</p>
                            </div>
                        </div>
                        <div className="status-dashboard">
                            <p>Your Account Status</p>
                            <hr />
                            <p>Your account is a free account, please upgrade it to get more advantages.</p>
                        </div>
                    </div>
                </Sidebar>
            </div>
        )
    }
}

export default Dashboard


