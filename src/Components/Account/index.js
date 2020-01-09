import React, { Component } from 'react'
import './index.css'
import Sidebar from '../../Containers/Sidebar'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Button from '@material-ui/core/Button';

export class Account extends Component {
    render() {
        return (
            <div>
                <Sidebar>
                    <div className="informative-content">
                        <AccountBoxIcon style={{ fill: "black" }} />
                        <span style={{ marginLeft: 10 }}>Account</span>
                    </div>
                    <div className="main-content-dashboard">
                        <div className="all-inputs-forma">
                            <p>Email:</p>
                            <div className="input-group">
                                <input type="email" className="form-control" placeholder="Email" />
                            </div>
                            <p>Password:</p>
                            <div className="input-group">
                                <input type="password" className="form-control" placeholder="Password" />
                            </div>
                            <div className="btn-registration">
                                <Button variant="contained" style={{ backgroundColor: "#337ab7", color: "white", marginTop: 15 }}>
                                    Update
                                </Button>
                            </div>
                        </div>
                    </div>
                </Sidebar>
            </div>
        )
    }
}

export default Account